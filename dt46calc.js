/*
 * Copyright (c) 2016 Thomas Walraet
 * License: MIT
 * 
 */

function dt46calc(nakedWeight, jumps) {
    "use strict";
    var result = {};
    var dt46table = {
        "60" : [ 175, 161, 147, 133, 124, 115, 107, 97, 89 ],
        "61" : [ 178, 163, 149, 135, 126, 116, 108, 98, 90 ],
        "62" : [ 180, 166, 151, 137, 127, 118, 109, 99, 91 ],
        "63" : [ 183, 168, 153, 138, 129, 119, 111, 100, 91 ],
        "64" : [ 185, 170, 155, 140, 130, 121, 112, 101, 92 ],
        "65" : [ 188, 173, 157, 142, 132, 122, 113, 102, 93 ],
        "66" : [ 190, 175, 159, 144, 134, 123, 114, 103, 94 ],
        "67" : [ 193, 177, 161, 146, 135, 125, 116, 104, 94 ],
        "68" : [ 195, 179, 164, 147, 137, 126, 117, 105, 95 ],
        "69" : [ 198, 182, 166, 149, 138, 128, 118, 106, 96 ],
        "70" : [ 200, 184, 168, 151, 140, 129, 119, 107, 96 ],
        "71" : [ 203, 186, 170, 153, 142, 130, 120, 107, 97 ],
        "72" : [ 205, 189, 172, 155, 143, 132, 121, 108, 98 ],
        "73" : [ 208, 191, 174, 156, 145, 133, 123, 109, 99 ],
        "74" : [ 210, 193, 176, 158, 146, 134, 124, 110, 99 ],
        "75" : [ 213, 196, 178, 160, 148, 136, 125, 111, 100 ],
        "76" : [ 215, 198, 180, 162, 150, 137, 126, 112, 101 ],
        "77" : [ 218, 200, 182, 163, 151, 139, 127, 113, 101 ],
        "78" : [ 220, 202, 184, 165, 153, 140, 128, 114, 102 ],
        "79" : [ 223, 205, 186, 167, 154, 141, 129, 115, 103 ],
        "80" : [ 225, 207, 188, 169, 156, 143, 131, 115, 103 ],
        "81" : [ 228, 209, 190, 170, 157, 144, 132, 116, 104 ],
        "82" : [ 230, 212, 192, 172, 159, 145, 133, 117, 104 ],
        "83" : [ 233, 214, 194, 174, 160, 146, 134, 118, 105 ],
        "84" : [ 235, 216, 196, 176, 162, 148, 135, 119, 106 ],
        "85" : [ 238, 219, 198, 177, 163, 149, 136, 120, 106 ],
        "86" : [ 240, 221, 201, 179, 165, 150, 137, 120, 107 ],
        "87" : [ 243, 223, 203, 181, 166, 152, 138, 121, 108 ],
        "88" : [ 245, 225, 205, 183, 168, 153, 139, 122, 108 ],
        "89" : [ 248, 228, 207, 184, 170, 154, 140, 123, 109 ],
        "90" : [ 250, 230, 209, 186, 171, 156, 141, 124, 109 ],
        "91" : [ 253, 232, 211, 188, 173, 157, 143, 124, 110 ],
        "92" : [ 255, 235, 213, 190, 174, 158, 144, 125, 110 ],
        "93" : [ 258, 237, 215, 191, 176, 159, 145, 126, 111 ],
        "94" : [ 260, 239, 217, 193, 177, 161, 146, 127, 112 ],
        "95" : [ 263, 242, 219, 195, 179, 162, 147, 128, 112 ],
        "96" : [ 265, 244, 221, 197, 180, 163, 148, 128, 113 ],
        "97" : [ 268, 246, 223, 198, 182, 164, 149, 129, 113 ],
        "98" : [ 270, 248, 225, 200, 183, 166, 150, 130, 114 ],
        "99" : [ 273, 251, 227, 202, 185, 167, 151, 131, 114 ],
        "100" : [ 275, 253, 229, 203, 186, 168, 152, 131, 115 ],
        "101" : [ 278, 255, 231, 205, 188, 169, 153, 132, 115 ],
        "102" : [ 280, 258, 233, 207, 189, 171, 154, 133, 116 ],
        "103" : [ 283, 260, 235, 209, 190, 172, 155, 134, 116 ],
        "104" : [ 285, 262, 237, 210, 192, 173, 156, 134, 117 ],
        "105" : [ 288, 265, 239, 212, 193, 174, 157, 135, 118 ],
        "106" : [ 290, 267, 241, 214, 195, 175, 158, 136, 118 ],
        "107" : [ 293, 269, 243, 215, 196, 177, 159, 136, 119 ],
        "108" : [ 295, 271, 245, 217, 198, 178, 160, 137, 119 ],
        "109" : [ 298, 274, 247, 219, 199, 179, 161, 138, 120 ],
        "110" : [ 300, 276, 249, 220, 201, 180, 162, 138, 120 ]
    };

    function getTableColumn(jumps) {
        var column;
        if (jumps < 100) {
            column = 0;
        } else if (jumps < 250) {
            column = 1;
        } else if (jumps < 400) {
            column = 2;
        } else if (jumps < 600) {
            column = 3;
        } else if (jumps < 800) {
            column = 4;
        } else if (jumps < 1000) {
            column = 5;
        } else if (jumps < 1400) {
            column = 6;
        } else if (jumps < 1800) {
            column = 7;
        } else {
            column = 8;
        }
        return column;
    }

    function getTableLine(weight) {
        var line;
        if (weight < 60) {
            line = 60;
        } else if (weight > 110) {
            line = 110;
        } else {
            line = weight;
        }
        return line;
    }

    function parseInput(input) {
        input = parseFloat(input);
        return Math.floor(input);
    }

    function reduceLimit(surface, percentageOf) {
        return Math.ceil(surface * (100 - percentageOf) / 100);
    }

    result.weight = parseInput(nakedWeight);
    if (isNaN(result.weight)) {
        return {
            error : "invalidWeight"
        };
    }

    result.jumps = parseInput(jumps);
    if (isNaN(result.jumps)) {
        return {
            error : "invalidJumps"
        };
    }
    if (result.jumps > 2000) {
        return {
            error : "2000Jumps"
        };
    }

    result.minSize = dt46table[getTableLine(result.weight)][getTableColumn(result.jumps)];
    result.minSize11 = reduceLimit(result.minSize, 11);
    result.minSize21 = reduceLimit(result.minSize, 21);

    return result;
}
