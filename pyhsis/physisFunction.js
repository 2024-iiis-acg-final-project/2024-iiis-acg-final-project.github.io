function SphereWithSphere(position1, velocity1, angle_velocity1, radius1, mass1,
                          position2, velocity2, angle_velocity2, radius2, mass2) {
    var discount_coef = 0.75;
    var center_velocity = {
        x: (velocity1.x * mass1 + velocity2.x * mass2) / (mass1 + mass2),
        y: (velocity1.y * mass1 + velocity2.y * mass2) / (mass1 + mass2),
        z: (velocity1.z * mass1 + velocity2.z * mass2) / (mass1 + mass2)
    };
    var discount_coef = 0.75;
    var new_this_velocity = {
        x: velocity1.x - (velocity1.x - center_velocity.x) * (1 + discount_coef),
        y: velocity1.y - (velocity1.y - center_velocity.y) * (1 + discount_coef),
        z: velocity1.z - (velocity1.z - center_velocity.z) * (1 + discount_coef)
    };
    var new_object_velocity = {
        x: velocity2.x - (velocity2.x - center_velocity.x) * (1 + discount_coef),
        y: velocity2.y - (velocity2.y - center_velocity.y) * (1 + discount_coef),
        z: velocity2.z - (velocity2.z - center_velocity.z) * (1 + discount_coef)
    };
    var relative_velocity = {
        x: velocity1.x - velocity2.x,
        y: velocity1.y - velocity2.y,
        z: velocity1.z - velocity2.z
    };
    var radius_vector = {
        x: position2.x - position1.x,
        y: position2.y - position1.y,
        z: position2.z - position1.z
    };
    var radius_norm = Math.sqrt(radius_vector.x * radius_vector.x + radius_vector.y * radius_vector.y + radius_vector.z * radius_vector.z);
    radius_vector.x /= radius_norm; radius_vector.y /= radius_norm; radius_vector.z /= radius_norm;
    var rv_norm = Math.sqrt(relative_velocity.x * relative_velocity.x + 
                            relative_velocity.y * relative_velocity.y +
                            relative_velocity.z * relative_velocity.z);
    var sin_theta = (radius_vector.x * relative_velocity.x +
                     radius_vector.y * relative_velocity.y +
                     radius_vector.z * relative_velocity.z) / rv_norm;
    var r1 = {
        x: radius_vector.x * radius1,
        y: radius_vector.y * radius1,
        z: radius_vector.z * radius1
    };
    var r2 = {
        x: - radius_vector.x * radius2,
        y: - radius_vector.y * radius2,
        z: - radius_vector.z * radius2
    };
    var w1r1 = {
        x: angle_velocity1.y * r1.z - angle_velocity1.z * r1.y,
        y: angle_velocity1.z * r1.x - angle_velocity1.x * r1.z,
        z: angle_velocity1.x * r1.y - angle_velocity1.y * r1.x
    };
    var w2r2 = {
        x: angle_velocity2.y * r2.z - angle_velocity2.z * r2.y,
        y: angle_velocity2.z * r2.x - angle_velocity2.x * r2.z,
        z: angle_velocity2.x * r2.y - angle_velocity2.y * r2.x
    };
    var r1v = {
        x: r1.y * relative_velocity.z - r1.z * relative_velocity.y,
        y: r1.z * relative_velocity.x - r1.x * relative_velocity.z,
        z: r1.x * relative_velocity.y - r1.y * relative_velocity.x
    };
    var r2v = {
        x: r2.y * relative_velocity.z - r2.z * relative_velocity.y,
        y: r2.z * relative_velocity.x - r2.x * relative_velocity.z,
        z: r2.x * relative_velocity.y - r2.y * relative_velocity.x
    };
    var ret_angle_velocity1 = {
        x: angle_velocity1.x + (mass2 * (r1v.x * sin_theta / radius1 + w1r1.x + w2r2.x)) / ((mass1 + mass2) * radius1),
        y: angle_velocity1.y + (mass2 * (r1v.y * sin_theta / radius1 + w1r1.y + w2r2.y)) / ((mass1 + mass2) * radius1),
        z: angle_velocity1.z + (mass2 * (r1v.z * sin_theta / radius1 + w1r1.z + w2r2.z)) / ((mass1 + mass2) * radius1)
    }
    var ret_angle_velocity2 = {
        x: angle_velocity2.x + (mass1 * (r2v.x * sin_theta / radius2 + w1r1.x + w2r2.x)) / ((mass1 + mass2) * radius2),
        y: angle_velocity2.y + (mass1 * (r2v.y * sin_theta / radius2 + w1r1.y + w2r2.y)) / ((mass1 + mass2) * radius2),
        z: angle_velocity2.z + (mass1 * (r2v.z * sin_theta / radius2 + w1r1.z + w2r2.z)) / ((mass1 + mass2) * radius2)
    }

    return {
        new_velocity1: new_this_velocity,
        new_velocity2: new_object_velocity,
        new_angle_velocity1: ret_angle_velocity1,
        new_angle_velocity2: ret_angle_velocity2
    }
}

function SphereWithPlane(velocity, angle_velocity, radius, normal) {
    var test_dir = velocity.x * normal.x + velocity.y * normal.y + velocity.z * normal.z;
    if (test_dir > 0) {
        normal.x = - normal.x; normal.y = - normal.y; normal.z = - normal.z;
    }
    test_dir = - test_dir;
    var ret_velocity = {
        x: velocity.x + 2 * normal.x * test_dir,
        y: velocity.y + 2 * normal.y * test_dir,
        z: velocity.z + 2 * normal.z * test_dir
    };
    var v_norm = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y + velocity.z * velocity.z);
    var sin_theta = test_dir / v_norm;
    var r1 = {
        x: - normal.x * radius,
        y: - normal.y * radius,
        z: - normal.z * radius
    };
    var w1r1 = {
        x: angle_velocity.y * r1.z - angle_velocity.z * r1.y,
        y: angle_velocity.z * r1.x - angle_velocity.x * r1.z,
        z: angle_velocity.x * r1.y - angle_velocity.y * r1.x
    };
    var rv = {
        x: r1.y * velocity.z - r1.z * velocity.y,
        y: r1.z * velocity.x - r1.x * velocity.z,
        z: r1.x * velocity.y - r1.y * velocity.x
    };
    var ret_angle_velocity = {
        x: angle_velocity.x + (sin_theta * rv.x / radius + w1r1.x) / radius,
        y: angle_velocity.y + (sin_theta * rv.y / radius + w1r1.y) / radius,
        z: angle_velocity.z + (sin_theta * rv.z / radius + w1r1.z) / radius
    };
    return {
        new_velocity: ret_velocity,
        new_angle_velocity: ret_angle_velocity
    }
}

export {SphereWithSphere, SphereWithPlane};