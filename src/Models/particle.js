import reactsvg from '../assets/react.svg';
import reduxsvg from '../assets/redux.svg';
import nodesvg from '../assets/node.svg';
import sasssvg from '../assets/sass.svg';
import mongodbsvg from '../assets/mongodb.svg';
import expresssvg from '../assets/express.svg';
import firebasesvg from '../assets/firebase.svg';
import mysqlsvg from '../assets/mysql.svg';
import javasvg from '../assets/java.svg';
import javascriptsvg from '../assets/javascript.svg';

export const particleJson = {
    "particles": {
        "number": {
            "value": 20,
            "density": {
                "enable": true,
                "value_area": 1000
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "speed": 1.5,
            "out_mode": "bounce"
        },
        "shape": {
            "type": [
                "image"
            ],
            "image": [
                {
                    "src": expresssvg,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": firebasesvg,
                    "height": 18,
                    "width": 18
                },
                {
                    "src": mysqlsvg,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": javasvg,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": javascriptsvg,
                    "height": 18,
                    "width": 18
                },
                {
                    "src": mongodbsvg,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": reduxsvg,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": reactsvg,
                    "height": 20,
                    "width": 20
                },
                {
                    "src": nodesvg,
                    "height": 20,
                    "width": 30
                },
                {
                    "src": sasssvg,
                    "height": 19,
                    "width": 19
                }
            ]
        },
        // "color": {
        //   "value": "#CCC"
        // },
        "size": {
            "value": 35,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 4,
                "size_min": 15,
                "sync": false
            }
        }
    },
    "retina_detect": false
}