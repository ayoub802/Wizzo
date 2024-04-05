import { COLORS } from "../styles/Global";
import { AnimalIcon, AnimalIconBlue, Annuaire1, Annuaire2, AutoIcon, AutoIconBlue, Calendar, Camp1, Camp2, Camp3, Coup1, Coup2, CourseIcon, CourseIconBlue, CourseIconGris, EcoIcon, EcoIconBlue, EcoIconGris, ElectroIcon, ElectroIconBlue, HomeIconGris, MotoIcon, MotoIconBlue, Notification1, Notification2, Notification3, RestaurantIcon, RestaurantIconBlue, RestoIconGris, ShoppingIcon, ShoppingIconblue, VetementIcon, VetementIconBlue, ViandIcon, ViandIconBlue, ViandIconGris } from "./image";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Octicons from "react-native-vector-icons/Octicons"
import Fontisto from "react-native-vector-icons/Fontisto"
import Feather from "react-native-vector-icons/Feather"

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

export const annuaire = [
    {
        id: 1,
        title: "les grands magasins de chateau thierry",
        address: "23 Grande rue 02400 Chateau Thierry",
        phone: "03.26.27.28.29",
        site: "www.monsite.fr",
        img: Notification1,
        kilometrag: 20
    },
    {
        id: 2,
        title: "la carte’rit",
        address: "23 Grande rue 02400 Chateau Thierry",
        phone: "03.26.27.28.29",
        site: "www.monsite.fr",
        img: Notification2,
        kilometrag: 20
    },
    {
        id: 3,
        title: "la carte’rit",
        address: "23 Grande rue 02400 Chateau Thierry",
        phone: "03.26.27.28.29",
        site: "www.monsite.fr",
        img: Annuaire1,
        kilometrag: 20
    },
    {
        id: 4,
        title: "la carte’rit",
        address: "23 Grande rue 02400 Chateau Thierry",
        phone: "03.26.27.28.29",
        site: "www.monsite.fr",
        img: Annuaire2,
        kilometrag: 20
    },
]

export const bonPlan = [
    {
        id: 1,
        title: "La lunetterie",
        address: "1 paire de lunettes achetée, la deuxième à 1 € de plus",
        remise: "1€ au lieu de 199€",
        date: "Le 23 juin 2024 à partir de 18h",
        img: Notification3,
    },
    {
        id: 2,
        title: "La lunetterie",
        address: "1 paire de lunettes achetée, la deuxième à 1 € de plus",
        remise: "50% de remise",
        date: "Le 23 juin 2024 à partir de 18h",
        img: Notification3,
    },
    {
        id: 1,
        title: "La lunetterie",
        address: "1 paire de lunettes achetée, la deuxième à 1 € de plus",
        remise: "139 € 99 €",
        date: "Le 23 juin 2024 à partir de 18h",
        img: Notification3,
    },
    {
        id: 1,
        title: "La lunetterie",
        address: "1 paire de lunettes achetée, la deuxième à 1 € de plus",
        remise: "50% de remise",
        date: "Le 23 juin 2024 à partir de 18h",
        img: Notification3,
    },

]

export const filterCategories = [
    {
        id: 1,
        title: "Animaux",
        iconGris: HomeIconGris,
        iconWhite: AnimalIcon
    },
    {
        id: 2,
        title: "Economie",
        iconGris: EcoIconGris,
        iconWhite: EcoIcon
    },
    {
        id: 3,
        title: "Resto",
        iconGris: RestoIconGris,
        iconWhite: RestaurantIcon
    },
    {
        id: 4,
        title: "Courses",
        iconGris: CourseIconGris,
        iconWhite: CourseIcon
    },
    {
        id: 5,
        title: "Viande",
        iconGris: ViandIconGris,
        iconWhite: ViandIcon
    },
]

export const filterDate = [
    {
        id: 1,
        title: "Les plus récents"
    },
    {
        id: 2,
        title: "Aujourd’hui"
    },
    {
        id: 3,
        title: "Demain"
    },
    {
        id: 4,
        title: "Cette semaine"
    },
]

export const fichInfo = [
    {
        id: 1,
        title: "Du mardi au dimanche",
        hour: "10:00 - 13:00",
        hour2: "10:00 - 13:00",
        address: "",
        icon: Calendar
    },
    {
        id: 2,
        title: "23 Grande rue",
        address: "02400 Chateau Thierry",
        hour: "",
        hour2: "",
        icon: <FontAwesome5 name="map-marker-alt" color={COLORS.primary} size={20}/>
    },
    {
        id: 3,
        title: "www.monsite.fr",
        hour: "",
        hour2: "",
        address: "",
        icon: <Octicons name="link" color={COLORS.primary} size={20}/>
    },
    {
        id: 4,
        title: "contact@monsite.fr",
        hour: "",
        hour2: "",
        address: "",
        icon: <Fontisto name="email" color={COLORS.primary} size={20}/>
    },
    {
        id: 5,
        title: "03.01.02.03.04",
        hour: "",
        hour2: "",
        address: "",
        icon: <Feather name="phone-call" color={COLORS.primary} size={20}/>
    },
]

export const Camp = [
    {
        id: 1,
        image: Camp1
    },
    {
        id: 2,
        image: Camp2
    },
    {
        id: 3,
        image: Camp3
    },
]