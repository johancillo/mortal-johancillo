# mortal-kombat

use node versión [v16.15.1]

Microservicio construido siguiendo los lineamientos de arquitectura Hexagonal, está construido con el framework NestJs.

## Getting started

Levantar proyecto:
1. yarn install
2. yarn start:dev
3. 

## PostMan Collection
usar postman con combinación de movimientos adjunto en el proyecto.
Adjunto en el proyecto
Name: mortal-kombat.postman_collection.json

## Request

El request consta del JSON enviado en la prueba técnica, ejemplo:

<p1> 
{
    "player1": {
        "movimientos": [
            "DSD",
            "S"
        ],
        "golpes": [
            "P",
            ""
        ]
    },
    "player2": {
        "movimientos": [
            "",
            "ASA",
            "DA",
            "AAA",
            "",
            "SA"
        ],
        "golpes": [
            "P",
            "",
            "P",
            "K",
            "K",
            "K"
        ]
    }
}</p1>

## Reponse
La respuesta básicamente entregará un listado de movimientos, indicando qué player lo está ejecutando, qué ataque o movmiento está realizando y cuánto daño está haciendo al otro player, también se mostará un status del player atacado con cada ataque, esto hasta que uno de los jugadores pierda llegando su puntaje a 0. Luego, al final de la respuesta se podrá ver al ganador de la batalla.

Ej

{
    "playMadeByPlayer": [
        {
            "playerAttacking": {
                "player": "player1",
                "playerName": "Tonyn Stallone",
                "currentLife": 6,
                "play": [
                    {
                        "name": "Taladoken",
                        "attack": {
                            "enable": true,
                            "point": 3
                        }
                    }
                ]
            },
            "attackedPlayer": {
                "player": "player2",
                "name": "Arnaldor Shuatseneguer",
                "damageReceive": 3,
                "currentLife": 3
            }
        },
        {
            "playerAttacking": {
                "player": "player2",
                "playerName": "Arnaldor Shuatseneguer",
                "currentLife": 3,
                "play": [
                    {
                        "name": "Puño",
                        "attack": {
                            "enable": true,
                            "point": 1
                        }
                    }
                ]
            },
            "attackedPlayer": {
                "player": "player1",
                "name": "Tonyn Stallone",
                "damageReceive": 1,
                "currentLife": 5
            }
        },
        {
            "playerAttacking": {
                "player": "player1",
                "playerName": "Tonyn Stallone",
                "currentLife": 5,
                "play": [
                    {
                        "name": "Arriba",
                        "attack": {
                            "enable": false,
                            "point": 0
                        }
                    }
                ]
            },
            "attackedPlayer": {
                "player": "player2",
                "name": "Arnaldor Shuatseneguer",
                "damageReceive": 0,
                "currentLife": 3
            }
        },
        {
            "playerAttacking": {
                "player": "player2",
                "playerName": "Arnaldor Shuatseneguer",
                "currentLife": 3,
                "play": [
                    {
                        "name": "Izquierda",
                        "attack": {
                            "enable": false,
                            "point": 0
                        }
                    },
                    {
                        "name": "Arriba",
                        "attack": {
                            "enable": false,
                            "point": 0
                        }
                    },
                    {
                        "name": "Izquierda",
                        "attack": {
                            "enable": false,
                            "point": 0
                        }
                    }
                ]
            },
            "attackedPlayer": {
                "player": "player1",
                "name": "Tonyn Stallone",
                "damageReceive": 0,
                "currentLife": 5
            }
        }
    ],
    "winningPlayer": {
        "name": "Arnaldor Shuatseneguer",
        "player": "player2",
        "life": 3,
        "quantutyHit": 5,
        "quantityMove": 10,
        "start": false,
        "plays": {
            "playerCombinations": [
                [
                    {
                        "name": "Puño",
                        "attack": {
                            "enable": true,
                            "point": 1
                        }
                    }
                ],
                [
                    {
                        "name": "Izquierda",
                        "attack": {
                            "enable": false,
                            "point": 0
                        }
                    },
                    {
                        "name": "Arriba",
                        "attack": {
                            "enable": false,
                            "point": 0
                        }
                    },
                    {
                        "name": "Izquierda",
                        "attack": {
                            "enable": false,
                            "point": 0
                        }
                    }
                ],
                [
                    {
                        "name": "Derecha",
                        "attack": {
                            "enable": false,
                            "point": 0
                        }
                    },
                    {
                        "name": "Izquierda",
                        "attack": {
                            "enable": false,
                            "point": 0
                        }
                    },
                    {
                        "name": "Puño",
                        "attack": {
                            "enable": true,
                            "point": 1
                        }
                    }
                ],
                [
                    {
                        "name": "Izquierda",
                        "attack": {
                            "enable": false,
                            "point": 0
                        }
                    },
                    {
                        "name": "Izquierda",
                        "attack": {
                            "enable": false,
                            "point": 0
                        }
                    },
                    {
                        "name": "Izquierda",
                        "attack": {
                            "enable": false,
                            "point": 0
                        }
                    },
                    {
                        "name": "Patada",
                        "attack": {
                            "enable": true,
                            "point": 1
                        }
                    }
                ],
                [
                    {
                        "name": "Patada",
                        "attack": {
                            "enable": true,
                            "point": 1
                        }
                    }
                ],
                [
                    {
                        "name": "Remuyuken",
                        "attack": {
                            "enable": true,
                            "point": 3
                        }
                    }
                ]
            ]
        },
        "winner": false
    }
}

