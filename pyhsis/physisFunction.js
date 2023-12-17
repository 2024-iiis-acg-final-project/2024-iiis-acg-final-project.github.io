function cross_product(vec1, vec2) {
    return {
        x: vec1.y * vec2.z - vec1.z * vec2.y,
        y: vec1.z * vec2.x - vec1.x * vec2.z,
        z: vec1.x * vec2.y - vec1.y * vec2.x
    };
}

function dot_product(vec1, vec2) {
    return vec1.x * vec2.x + vec1.y * vec2.y + vec1.z * vec2.z;
}

function vec_delete(vec1, vec2) {
    return {
        x: vec1.x - vec2.x,
        y: vec1.y - vec2.y,
        z: vec1.z - vec2.z
    };
}

function vec_add(vec1, vec2) {
    return {
        x: vec1.x + vec2.x,
        y: vec1.y + vec2.y,
        z: vec1.z + vec2.z
    };
}

function time_num(vec, num) {
    return {
        x: vec.x * num,
        y: vec.y * num,
        z: vec.z * num
    };
}

function SphereWithSphere(position1, velocity1, angle_velocity1, radius1, mass1,
                          position2, velocity2, angle_velocity2, radius2, mass2) {
    var discount_coef = 0.9;
    var center_velocity = {
        x: (velocity1.x * mass1 + velocity2.x * mass2) / (mass1 + mass2),
        y: (velocity1.y * mass1 + velocity2.y * mass2) / (mass1 + mass2),
        z: (velocity1.z * mass1 + velocity2.z * mass2) / (mass1 + mass2)
    };
    var new_this_velocity = {
        x: (velocity1.x - (velocity1.x - center_velocity.x) * 2) * discount_coef,
        y: (velocity1.y - (velocity1.y - center_velocity.y) * 2) * discount_coef,
        z: (velocity1.z - (velocity1.z - center_velocity.z) * 2) * discount_coef
    };
    var new_object_velocity = {
        x: (velocity2.x - (velocity2.x - center_velocity.x) * 2) * discount_coef,
        y: (velocity2.y - (velocity2.y - center_velocity.y) * 2) * discount_coef,
        z: (velocity2.z - (velocity2.z - center_velocity.z) * 2) * discount_coef
    };

    var relative_velocity = vec_delete(velocity1, velocity2);
    var radius_vector = vec_delete(position1, position2);
    var radius_norm = Math.sqrt(dot_product(radius_vector, radius_vector));
    radius_vector = time_num(radius_vector, 1.0 / radius_norm);
    var r1 = time_num(radius_vector, radius1);
    var r2 = time_num(radius_vector, -radius2);
    var w1r1 = cross_product(angle_velocity1, r1);
    var w2r2 = cross_product(angle_velocity2, r2);
    var vr1 = time_num(r1, dot_product(relative_velocity, r1) / radius1 / radius1);
    var vr2 = time_num(r2, dot_product(relative_velocity, r2) / radius2 / radius2);

    var ret_angle_velocity1 = time_num(vec_add(angle_velocity1, time_num(cross_product(r1, vec_delete(relative_velocity, vec_add(vr2, vec_add(w1r1, w2r2)))), 5 / 7 * mass2 / (mass1 + mass2) / radius1 / radius1)), discount_coef);
    var ret_angle_velocity2 = time_num(vec_add(angle_velocity2, time_num(cross_product(r2, vec_delete(relative_velocity, vec_add(vr1, vec_add(w1r1, w2r2)))), 5 / 7 * mass1 / (mass1 + mass2) / radius2 / radius2)), discount_coef);

    return {
        new_velocity1: new_this_velocity,
        new_velocity2: new_object_velocity,
        new_angle_velocity1: ret_angle_velocity1,
        new_angle_velocity2: ret_angle_velocity2
    }
}

function SphereWithPlane(velocity, angle_velocity, radius, norm) {
    var discount_coef = 0.9;
    var normal = {
        x: norm.x,
        y: norm.y,
        z: norm.z
    }
    var test_dir = dot_product(velocity, normal);
    if (test_dir > 0) {
        normal = time_num(normal, -1);
    }
    test_dir = - test_dir;
    var ret_velocity = time_num(vec_add(velocity, time_num(normal, 2 * test_dir)), discount_coef);

    var r1 = time_num(normal, -radius);

    var av_tmp = vec_add(cross_product(angle_velocity, r1), time_num(r1, dot_product(velocity, r1) / radius/ radius));
    var add_av_tmp = vec_delete(velocity, av_tmp);
    var add_angle_velocity_without_coef = cross_product(r1, add_av_tmp);
    var add_angle_velocity = time_num(add_angle_velocity_without_coef, 5 / 7 / radius / radius);
    var angle_velocity_without_discount = vec_add(angle_velocity, add_angle_velocity);

    var ret_angle_velocity = time_num(angle_velocity_without_discount, discount_coef);
    
    return {
        new_velocity: ret_velocity,
        new_angle_velocity: ret_angle_velocity
    }
}

function damage(energy) {
    if (energy * 2000 < 3) {
        return 0;
    }
    else {
        // window.alert(String(energy) + " " + String(energy * 2000) + " " + String(Math.exp(Math.min(5, energy * 500))));
        return energy * 2000;
    }
}

export {SphereWithSphere, SphereWithPlane, damage};