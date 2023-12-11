import { Group, PlaneGeometry, Mesh, MeshBasicMaterial, MeshStandardMaterial, BoxGeometry, TextureLoader, RepeatWrapping } from "three";

class BreakableWall extends Group {
    constructor(parent, id, cfg) {
        super();
        this.parent = parent;
        this.name = 'breakable_wall';
        this.obj_type = 'wall';
        this.geo = 'cube';
        this.wall_id = id;
        this.blood = 150;
        this.state = 1;
        this.cfg = cfg;
        const textureLoader = new TextureLoader();
        textureLoader.load(
            './objects/picture/breakablewall1.jpg',
            function (texture) {
                texture.wrapS = RepeatWrapping;
                texture.wrapT = RepeatWrapping;
                const repeatX = cfg['length'] / 5;
                const repeatY = cfg['hight'] / 5;
                const repeatZ = cfg['width'] / 5;

                // const material = new MeshStandardMaterial({map: texture});
                const materials = [
                    new MeshStandardMaterial({map: texture.clone()}),
                    new MeshStandardMaterial({map: texture.clone()}),
                    new MeshStandardMaterial({map: texture.clone()}),
                    new MeshStandardMaterial({map: texture.clone()}),
                    new MeshStandardMaterial({map: texture.clone()}),
                    new MeshStandardMaterial({map: texture.clone()})
                ];

                materials[0].map.repeat.set(repeatZ, repeatY);
                materials[1].map.repeat.set(repeatZ, repeatY);
                materials[2].map.repeat.set(repeatX, repeatZ);
                materials[3].map.repeat.set(repeatX, repeatZ);
                materials[4].map.repeat.set(repeatX, repeatY);
                materials[5].map.repeat.set(repeatX, repeatY);

                const geometry = new BoxGeometry(cfg['length'], cfg['hight'], cfg['width']);

                this.wall = new Mesh(geometry, materials);
                this.wall.position.set(cfg['x'], cfg['y'], cfg['z']);
                this.parent.add(this.wall);
                
            }.bind(this),
            undefined,
            function ( err ) {
                window.alert( 'An error happened.' );
            }
        );
            textureLoader.load(
                './objects/picture/breakablewall2.jpg',
                function (texture) {
                    texture.wrapS = RepeatWrapping;
                    texture.wrapT = RepeatWrapping;
                    const repeatX = cfg['length'] / 5;
                    const repeatY = cfg['hight'] / 5;
                    const repeatZ = cfg['width'] / 5;
    
                    // const material = new MeshStandardMaterial({map: texture});
                    const newmaterials = [
                        new MeshStandardMaterial({map: texture.clone()}),
                        new MeshStandardMaterial({map: texture.clone()}),
                        new MeshStandardMaterial({map: texture.clone()}),
                        new MeshStandardMaterial({map: texture.clone()}),
                        new MeshStandardMaterial({map: texture.clone()}),
                        new MeshStandardMaterial({map: texture.clone()})
                    ];
    
                    newmaterials[0].map.repeat.set(repeatZ, repeatY);
                    newmaterials[1].map.repeat.set(repeatZ, repeatY);
                    newmaterials[2].map.repeat.set(repeatX, repeatZ);
                    newmaterials[3].map.repeat.set(repeatX, repeatZ);
                    newmaterials[4].map.repeat.set(repeatX, repeatY);
                    newmaterials[5].map.repeat.set(repeatX, repeatY);
    
                    const geometry = new BoxGeometry(cfg['length'], cfg['hight'], cfg['width']);
                    this.newwall = new Mesh(geometry, newmaterials);
                    this.newwall.position.set(cfg['x'], cfg['y'], cfg['z']);
                    
                }.bind(this),
                undefined,
                function ( err ) {
                    window.alert( 'An error happened.' );
                }
            );

        this.min_x = cfg['x'] - cfg['length'] / 2; this.max_x = cfg['x'] + cfg['length'] / 2;
        this.min_y = cfg['y'] - cfg['hight'] / 2; this.max_y = cfg['y'] + cfg['hight'] / 2;
        this.min_z = cfg['z'] - cfg['width'] / 2; this.max_z = cfg['z'] + cfg['width'] / 2;

        this.no_collision = false;
        // The collision are calcualte by filed, which is different from sphere and plane
        parent.addToUpdateList(this);
    }

    get_direction(position) {
        var ret_x = position.x, ret_y = position.y, ret_z = position.z;
        if (ret_x < this.min_x) {
            ret_x = ret_x - this.min_x;
        }
        else if (ret_x > this.max_x) {
            ret_x = ret_x - this.max_x;
        }
        else {
            ret_x = 0;
        }
        if (ret_y < this.min_y) {
            ret_y = ret_y - this.min_y;
        }
        else if (ret_y > this.max_y) {
            ret_y = ret_y - this.max_y;
        }
        else {
            ret_y = 0;
        }
        if (ret_z < this.min_z) {
            ret_z = ret_z - this.min_z;
        }
        else if (ret_z > this.max_z) {
            ret_z = ret_z - this.max_z;
        }
        else {
            ret_z = 0;
        }
        return {
            x: ret_x,
            y: ret_y,
            z: ret_z
        }
    }

    update(){

        if(this.blood <100&&this.state==1) {
            this.state==0;
            this.parent.remove(this.wall);
            // this.parent.remove(this.newwall);
            // this.wall.material= newmaterials;
            this.parent.add(this.newwall);
        }
        if(this.blood <100&&this.state==0) {
            this.state==0;
            this.parent.remove(this.newwall);
            // this.parent.remove(this.newwall);
            // this.wall.material= newmaterials;
            this.parent.add(this.newwall);
        }
        if(this.blood<=0){
            this.parent.remove(this.newwall)
            this.no_collision = true;
        }
    }
}

export default BreakableWall;