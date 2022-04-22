export const provincias: ProvinciasType[] = [
    {
        regionNumber: "15",
        provinciasNames: ["Arica", "Parinacota"]
    },
    {
        regionNumber: "1",
        provinciasNames: ["Iquique", "Tamarugal"]
    },
    {
        regionNumber: "2",
        provinciasNames: ["Antofagasta", "El Loa", "Tocopilla"]
    },
    {
        regionNumber: "3",
        provinciasNames: ["Chañaral", "Copiapó", "Huasco"]
    },
    {
        regionNumber: "4",
        provinciasNames: ["Choapa", "Elqui", "Limarí"]
    },
    {
        regionNumber: "5",
        provinciasNames: ["Isla de Pascua", "Los Andes", "Marga Marga", "Petorca", "Quillota", "San Antonio", "San Felipe de Aconcagua", "Valparaíso"]
    },
    {
        regionNumber: "13",
        provinciasNames: ["Chacabuco", "Cordillera", "Maipo", "Melipilla", "Santiago"]
    },
    {
        regionNumber: "6",
        provinciasNames: ["Cachapoal", "Cardenal Caro", "Colchagua"]
    },
    {
        regionNumber: "7",
        provinciasNames: ["Cauquenes", "Curicó", "Linares", "Talca"]
    },
    {
        regionNumber: "16",
        provinciasNames: ["Diguillín", "Itata", "Punilla"]
    },
    {
        regionNumber: "8",
        provinciasNames: ["Arauco", "Biobío", "Concepción"]
    },
    {
        regionNumber: "9",
        provinciasNames: ["Cautín", "Malleco"]
    },
    {
        regionNumber: "14",
        provinciasNames: ["Ranco", "Valdivia"]
    },
    {
        regionNumber: "10",
        provinciasNames: ["Chiloé", "Llanquihue", "Osorno", "Palena"]
    },
    {
        regionNumber: "11",
        provinciasNames: ["Aysén", "Capitán Prat", "Coyhaique", "General Carrera"]
    },
    {
        regionNumber: "12",
        provinciasNames: ["Antártica Chilena", "Magallanes", "Tierra del Fuego", "Ultima Esperanza"]
    }
]

export interface ProvinciasType {

    regionNumber: string;
    provinciasNames: string[];
}