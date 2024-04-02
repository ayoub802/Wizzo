import { COLORS } from "../styles/Global";
import { AnimalIcon, AnimalIconBlue, AutoIcon, AutoIconBlue, Coup1, Coup2, CourseIcon, CourseIconBlue, EcoIcon, EcoIconBlue, ElectroIcon, ElectroIconBlue, MotoIcon, MotoIconBlue, Notification1, Notification2, Notification3, RestaurantIcon, RestaurantIconBlue, ShoppingIcon, ShoppingIconblue, VetementIcon, VetementIconBlue, ViandIcon, ViandIconBlue } from "./image";

export const categories = [
    {
        id: 1,
        title: "Animaux",
        icon: AnimalIcon,
        iconBlue: AnimalIconBlue,
        color: COLORS.redColor
    },
    {
        id: 2,
        title: "Economie",
        icon: EcoIcon,
        iconBlue: EcoIconBlue,
        color: COLORS.orangeColor
    },
    {
        id: 3,
        title: "Restaurant",
        icon: RestaurantIcon,
        iconBlue: RestaurantIconBlue,
        color: COLORS.primary
    },
    {
        id: 4,
        title: "Courses",
        icon: CourseIcon,
        iconBlue: CourseIconBlue,
        color: COLORS.primary
    },
    {
        id: 5,
        title: "Viande",
        icon: ViandIcon,
        iconBlue: ViandIconBlue,
        color: COLORS.skyColor
    },
    {
        id: 6,
        title: "Shopping",
        icon: ShoppingIcon,
        iconBlue: ShoppingIconblue,
        color: COLORS.greenlightColor
    },
    {
        id: 7,
        title: "Vêtements",
        icon: VetementIcon,
        iconBlue: VetementIconBlue,
        color: COLORS.orangeColor
    },
    {
        id: 8,
        title: "Electronique",
        icon: ElectroIcon,
        iconBlue: ElectroIconBlue,
        color: COLORS.redColor
    },
    {
        id: 9,
        title: "Auto",
        icon: AutoIcon,
        iconBlue: AutoIconBlue,
        color: COLORS.greenlightColor
    },
    {
        id: 10,
        title: "Moto",
        icon: MotoIcon,
        iconBlue: MotoIconBlue,
        color: COLORS.primary
    },
]

export const intert = [
    {
        id: 1,
        title: "Auto", 
        color: "#6B7AED"
    },
    {
        id: 2,
        title: "Animaux", 
        color: "#EE544A"
    },
    {
        id: 3,
        title: "Economie", 
        color: "#FF8D5D"
    },
    {
        id: 4,
        title: "Art", 
        color: "#7D67EE"
    },
    {
        id: 5,
        title: "Resto", 
        color: "#29D697"
    },
    {
        id: 6,
        title: "Autres", 
        color: "#39D1F2"
    },
]

export const coups = [
    {
        id: 1,
        title: "La lunetterie",
        date: "18 mars",
        description: "Quibus ita sceleste patratis Paulus cruore perfusus ",
        img: Coup1
    },
    {
        id: 2,
        title: "Angelina Zolly",
        date: "10 mars",
        description: "Quibus ita sceleste patratis Paulus cruore perfusus ",
        img: Coup2
    },
]

export const infoUpdate = [
    {
        id: 1,
        title: "Mathieu Seguin"
    },
    {
        id: 2,
        title: "mseguin@google.com",
        textDecoration: "underline"
    },
    {
        id: 3,
        title: "Mot de passe"
    },
    {
        id: 4,
        title: "Mes notifications"
    },
]

export const NotificationData = [
    {
        id: 1,
        title: "Fête de la lunette",
        address: "23 Grande rue 02400 Chateau Thierry",
        phone: "03.26.27.28.29",
        site: "www.monsite.fr",
        date: "Maintenant",
        img: Notification1,
        buttonText: "En savoir plus"
    },
    {
        id: 2,
        title: "Foire champenoise",
        address: "23 Grande rue 02400 Chateau Thierry",
        phone: "03.26.27.28.29",
        site: "www.foirechampenois.info",
        date: "Il y a 1h",
        img: Notification2,
        buttonText: "En savoir plus"
    },
    {
        id: 3,
        title: "La lunetterie",
        address: "1 paire de lunettes achetée, la deuxième à 1 € de plus",
        // phone: "03.26.27.28.29",
        // site: "www.foirechampenois.info",
        date: "Il y a 1 jour",
        img: Notification3,
        buttonText: "En profiter"
    },
    {
        id: 4,
        title: "Fête de la lunette",
        address: "23 Grande rue 02400 Chateau Thierry",
        phone: "03.26.27.28.29",
        site: "www.monsite.fr",
        date: "Maintenant",
        img: Notification1,
        buttonText: "En savoir plus"
    },
    {
        id: 5,
        title: "Foire champenoise",
        address: "23 Grande rue 02400 Chateau Thierry",
        phone: "03.26.27.28.29",
        site: "www.foirechampenois.info",
        date: "Il y a 1h",
        img: Notification2,
        buttonText: "En savoir plus"
    },
]