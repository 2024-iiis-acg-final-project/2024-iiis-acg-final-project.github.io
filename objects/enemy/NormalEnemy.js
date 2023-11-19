import {Group, MeshStandardMaterial, SphereGeometry, Mesh} from 'three';

class NormalEnemy extends Group{
    constructor(parent, x, y, z, id) {
        super();
        this.parent = parent;
        this.name = 'normal_enemy';
        this.obj_type = 'enemy';

        this.enemy = new Mesh(new SphereGeometry(0.3, 32, 32), new MeshStandardMaterial({ color: 0x0000ff }));
        this.enemy.position.set(x, y, z);

        this.blood = 100;
        this.enemy_id = id;

        parent.addToUpdateList(this);
        this.parent.add(this.enemy);
    }

    update() {

    }
}

export default NormalEnemy;