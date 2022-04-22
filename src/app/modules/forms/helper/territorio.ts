export interface RegionType {
    name: string;
    romanNumber: string;
    number: string;
    abbreviation: string;
    provincias: ProvinciasType[];
}

interface ProvinciasType {
    nombre: string;
    comunas: string[];
}


const RegionesYComunas: RegionType[] = [
    {
        name: "Arica y Parinacota",
        romanNumber: "XV",
        number: "15",
        abbreviation: "AP",
        provincias: [
            {
                nombre: "Arica",
                comunas: ['Arica', 'Camarones']
            },
            {
                nombre: "Parinacota",
                comunas: ["General Lagos", "Putre"]
            }
        ]
    },
    {
        name: "Tarapacá",
        romanNumber: "I",
        number: "1",
        abbreviation: "TA",
        provincias: [
            {
                nombre: "Iquique",
                comunas: ["Alto Hospicio", "Iquique"]
            },
            {
                nombre: "Tamarugal",
                comunas: ["Camiña", "Colchane", "Huara", "Pica", "Pozo Almonte"]
            }
        ]

    },
    {
        name: "Antofagasta",
        romanNumber: "II",
        number: "2",
        abbreviation: "AN",
        provincias: [
            {
                nombre: "Antofagasta",
                comunas: ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal"]
            },
            {
                nombre: "El Loa",
                comunas: ["Calama", "Ollagüe", "San Pedro de Atacama"]
            },
            {
                nombre: "Tocopilla",
                comunas: ["María Elena", "Tocopilla"]
            }
        ]
    },
    {
        name: "Atacama",
        romanNumber: "III",
        number: "3",
        abbreviation: "AT",
        provincias: [
            {
                nombre: "Chañaral",
                comunas: ["Chañaral", "Diego de Almagro"]
            },
            {
                nombre: "Copiapó",
                comunas: ["Caldera", "Copiapó", "Tierra Amarilla"]
            },
            {
                nombre: "Huasco",
                comunas: ["Alto del Carmen", "Freirina", "Huasco", "Vallenar"]
            }
        ]
    },
    {
        name: "Coquimbo",
        romanNumber: "IV",
        number: "4",
        abbreviation: "CO",
        provincias: [
            {
                nombre: "Choapa",
                comunas: ["Canela", "Illapel", "Los Vilos", "Salamanca"]
            },
            {
                nombre: "Elqui",
                comunas: ["Andacollo", "Coquimbo", "La Higuera", "La Serena", "Paihuano", "Vicuña"]
            },
            {
                nombre: "Limarí",
                comunas: ["Combarbalá", "Monte Patria", "Ovalle", "Punitaqui", "Rio Hurtado"]
            }
        ]
    },
    {
        name: "Valparaíso",
        romanNumber: "V",
        number: "5",
        abbreviation: "VA",
        provincias: [
            {
                nombre: "Isla de Pascua",
                comunas: ["Isla de Pascua"]
            },
            {
                nombre: "Los Andes",
                comunas: ["Calle Larga", "Los Andes", "Rinconada de Los Andes", "San Esteban"]
            },
            {
                nombre: "Marga Marga",
                comunas: ["Limache", "Olmué", "Quilpué", "Villa Alemana"]
            },
            {
                nombre: "Petorca",
                comunas: ["Cabildo", "La Ligua", "Papudo", "Petorca", "Zapallar"]
            },
            {
                nombre: "Quillota",
                comunas: ["Hijuelas", "La Calera", "La Cruz", "Nogales", "Quillota"]
            },
            {
                nombre: "San Antonio",
                comunas: ["Algarrobo", "Cartagena", "El Quisco", "El Tabo", "San Antonio", "Santo Domingo"]
            },
            {
                nombre: "San Felipe de Aconcagua",
                comunas: ["Catemu", "Llaillay", "Panquehue", "Putaendo", "San Felipe", "Santa María"]
            },
            {
                nombre: "Valparaiso",
                comunas: ["Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Valparaíso", "Viña del Mar"]
            }
        ]
    },
    {
        name: "Metropolitana de Santiago",
        romanNumber: "XIII",
        number: "13",
        abbreviation: "RM",
        provincias: [
            {
                nombre: "Chacabuco",
                comunas: ["Colina", "Lampa", "Tiltil"]
            },
            {
                nombre: "Cordillera",
                comunas: ["Pirque", "Puente Alto", "San José de Maipo"]
            },
            {
                nombre: "Maipo",
                comunas: ["Buin", "Calera de Tango", "Paine", "San Bernardo"]
            },
            {
                nombre: "Melipilla",
                comunas: ["Alhué", "Curacaví", "María Pinto", "Melipilla", "San Pedro"]
            },
            {
                nombre: "Santiago",
                comunas: ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Granja", "La Florida", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "San Miguel", "San Joaquín", "San Ramon", "Santiago", "Vitacura"]
            }
        ]
    },
    {
        name: "Libertador Gral. Bernardo OHiggins",
        romanNumber: "VI",
        number: "6",
        abbreviation: "LI",
        provincias: [
            {
                nombre: "Cachapoal",
                comunas: ["Codegua", "Coínco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rancagua", "Requínoa", "Rengo", "San Francisco de Mostazal", "San Vicente de Tagua Tagua"]
            },
            {
                nombre: "Cardenal Caro",
                comunas: ["La Estrella", "Litueche", "Marchigüe", "Navidad", "Paredones", "Pichilemu"]
            },
            {
                nombre: "Colchagua",
                comunas: ["Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "San Fernando", "Santa Cruz"]
            }
        ]
    },
    {
        name: "Maule",
        romanNumber: "VII",
        number: "7",
        abbreviation: "ML",
        provincias: [
            {
                nombre: "Cauquenes",
                comunas: ["Cauquenes", "Chanco", "Pelluhue"]
            },
            {
                nombre: "Curicó",
                comunas: ["Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén"]
            },
            {
                nombre: "Linares",
                comunas: ["Colbún", "Linares", "Longaví", "Parral", "Retiro", "San Javier de Loncomilla", "Villa Alegre", "Yerbas Buenas"]
            },
            {
                nombre: "Talca",
                comunas: ["Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Talca"]
            }
        ]
    },
    {
        name: "Ñuble",
        romanNumber: "XVI",
        number: "16",
        abbreviation: "NB",
        provincias: [
            {
                nombre: "Diguillín",
                comunas: ["Bulnes", "Chillán", "Chillán Viejo", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay"]
            },
            {
                nombre: "Itata",
                comunas: ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco"]
            },
            {
                nombre: "Punilla",
                comunas: ["Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"]
            }
        ]
    },
    {
        name: "Biobío",
        romanNumber: "VIII",
        number: "8",
        abbreviation: "BI",
        provincias: [
            {
                nombre: "Arauco",
                comunas: ["Arauco", "Cañete", "Contulmo", "Curanilahue", "Lebu", "Los Álamos", "Tirúa"]
            },
            {
                nombre: "Biobío",
                comunas: ["Alto Biobío", "Antuco", "Cabrero", "Laja", "Los Ángeles", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quileco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel"]
            },
            {
                nombre: "Concepción",
                comunas: ["Chiguayante", "Concepción", "Coronel", "Florida", "Hualpén", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé"]
            }
        ]
    },
    {
        name: "Araucanía",
        romanNumber: "IX",
        number: "9",
        abbreviation: "AR",
        provincias: [
            {
                nombre: "Cautín",
                comunas: ["Carahue", "Cholchol", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre Las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Temuco", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarica"]
            },
            {
                nombre: "Malleco",
                comunas: ["Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renalco", "Traiguén", "Victoria"]
            }
        ]
    },
    {
        name: "Los Ríos",
        romanNumber: "XIV",
        number: "14",
        abbreviation: "LR",
        provincias: [
            {
                nombre: "Ranco",
                comunas: ["Futrono", "La Unión", "Lago Ranco", "Río Bueno"]
            },
            {
                nombre: "Valdivia",
                comunas: ["Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipoulli", "Valdivia"]
            }
        ]
    },
    {
        name: "Los Lagos",
        romanNumber: "X",
        number: "10",
        abbreviation: "LL",
        provincias: [
            {
                nombre: "Chiloé",
                comunas: ["Ancud", "Castro", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao"]
            },
            {
                nombre: "Llanquihue",
                comunas: ["Calbuco", "Cochamó", "Fresia", "Frutillar", "LLanquihue", "Los Muermos", "Maullín", "Puerto Montt", "Puerto Varas"]
            },
            {
                nombre: "Osorno",
                comunas: ["Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Pablo", "San Juan de la Costa"]
            },
            {
                nombre: "Palena",
                comunas: ["Chaitén", "Futaleufú", "Hualaihué", "Palena"]
            }
        ]
    },
    {
        name: "Aysén del Gral. Carlos Ibáñez del Campo",
        romanNumber: "XI",
        number: "11",
        abbreviation: "AI",
        provincias: [
            {
                nombre: "Aysén",
                comunas: ["Aysén", "Cisnes", "Guaitecas"]
            },
            {
                nombre: "Capitán Prat",
                comunas: ["Cochrane", "OHiggins", "Tortel"]
            },
            {
                nombre: "Coyhaique",
                comunas: ["Coyhaique", "Lago Verde"]
            },
            {
                nombre: "General Carrera",
                comunas: ["Chile Chico", "Rio Ibáñez"]
            }
        ]
    },
    {
        name: "Magallanes y de la Antártica Chilena",
        romanNumber: "XII",
        number: "12",
        abbreviation: "MA",
        provincias: [
            {
                nombre: "Antártica Chilena",
                comunas: ["Antártica", "Cabo de Hornos"]
            },
            {
                nombre: "Magallanes",
                comunas: ["Laguna Blanca", "Punta Arenas", "Río Verde", "San Gregorio"]
            },
            {
                nombre: "Tierra del Fuego",
                comunas: ["Porvenir", "Primavera", "Timaukel"]
            },
            {
                nombre: "Ultima Esperanza",
                comunas: ["Natales", "Torres del Paine"]
            }
        ]
    },
];

export default RegionesYComunas;