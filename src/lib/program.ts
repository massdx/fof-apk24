
export type ProgramType = {
  id: number;
  title: string;
  date: string;
  active: boolean;
  content: ProgramDataType[];
}
export type ProgramDataType = {
  debut: string;
  fin: string;
  title: string;
  type: string;
  description?: string;
  intervenant?: string;
}
export const program: ProgramType[] = [
  {
    id: 1,
    title: "VENDREDI",
    date: "19 JAN 2024",
    active: true,
    content: [
      {
        debut: "08:00",
        fin: "09:30",
        title: "Accueil",
        type: "annonce",
        description: "Enregistrement des participants et petit déjeuner",
      },
      {
        debut: "09:30",
        fin: "09:40",
        title: "Mot de Bienvenu du Présentateur",
        type: "annonce",
        description: "",
      },
      {
        debut: "09:40",
        fin: "10:00",
        title: "Mot de l’ESCEN",
        type: "annonce",
        description: "",
      },
      {
        debut: "10:00",
        fin: "10:10",
        title: "Mot du Community Advocate Fof Lomé",
        type: "annonce",
        description: "",
      },
      {
        debut: "10:10",
        fin: "10:40",
        title: "Approche de l'accessibilité dans le processus d'innovation de Dashmake",
        type: "keynote",
        intervenant: "Eddie Michel Edem ATIKLEME",
      },
      {
        debut: "10:40",
        fin: "11:00",
        title: "Photo d’ensemble",
        type: "annonce",
        description: "",
      },
      {
        debut: "11:00",
        fin: "11:10",
        title: "Annonce",
        type: "annonce",
        description: "",
      },
      {
        debut: "11:10",
        fin: "11:40",
        title: "Comprendre ses users et créer de meilleurs produits grâce au product analytics",
        type: "keynote",
        intervenant: "Mohamed Aly SIDIBE",
      },
      {
        debut: "11:40",
        fin: "12:00",
        title: "Application du Framework Scrum sur un projet Tech réel",
        type: "workshop",
        intervenant: "Agnilonda PAKOU",
      },
      {
        debut: "11:40",
        fin: "12:00",
        title: "L'expérience client: les contrats",
        type: "keynote",
        intervenant: "Laurel LAWSON & Loic Agbogawo",
      },
      {
        debut: "12:00",
        fin: "13:00",
        title: "Pause Déjeuner",
        type: "annonce",
        description: "",
      },
      {
        debut: "13:00",
        fin: "13:40",
        title: "Guide pratique pour réussir un test d'utilisabilité et adapter son produit au contexte africain",
        type: "keynote",
        intervenant: "Hafisou KALAMA",
      },
      {
        debut: "13:40",
        fin: "14:20",
        title: "La Blockchain au service de l'Accessibilité Universelle : créons ensemble un monde Connecté et Inclusif",
        type: "keynote",
        intervenant: "Kodjo Labore Agbetsiassi",
      },
      {
        debut: "14:25",
        fin: "14:30",
        title: "annonce",
        type: "annonce",
        description: "",
      },
      {
        debut: "14:30",
        fin: "15:30",
        title: "Accessibilité dans le développement d'applications mobile avec Flutter",
        type: "workshop",
        intervenant: "Kokou Bienvenu AGBAVON",
      },
      {
        debut: "14:30",
        fin: "15:30",
        title: "Une méthode d évaluation SHADOWIN : Cas de l'application ZON A",
        type: "workshop",
        intervenant: "Mawuo Emmauel SENOU",
      },
    ]

  },
  {
    id: 2,
    title: "SAMEDI",
    date: "20 JAN 2024",
    active: false,
    content:  [
      {
        debut: "08:00",
        fin: "08:30",
        title: "Accueil",
        type: "annonce",
        description: "",
      },
      {
        debut: "08:30",
        fin: "08:30",
        title: "Mot du bienvenu du présentateur",
        type: "annonce",
        description: "",
      },
      {
        debut: "08:30",
        fin: "09:30",
        title: "Accueil",
        type: "annonce",
        description: "",
      },
      {
        debut: "09:00",
        fin: "9:30",
        title: "Défi et avantage rencontrer lors de la conception de projet informatique social.",
        type: "keynote",
        intervenant: "Adotè Fabrice TOSSOU",
      },
      {
        debut: "09:40",
        fin: "10:20",
        title: "Code et créativité : Concevoir des Expériences Centrées sur l'Utilisateur",
        type: "keynote",
        intervenant: "Charlot TABADE",
      },
      {
        debut: "09:40",
        fin: "10:20",
        title: "Annonce x Intermède",
        type: "annonce",
        description: "",
      },
      {
        debut: "10:30",
        fin: "11:00",
        title: "Développer des interfaces interactives avec Flutter",
        type: "keynote",
        intervenant: "Rebecca TABOUKOUNA",
      },
      {
        debut: "11:10",
        fin: "11:40",
        title: "Comment rendre son Interface Utilisateur (UI) accessible",
        type: "keynote",
        intervenant: "Mabagou BONSOA",
      },
      {
        debut: "11:50",
        fin: "12:30",
        title: "Pause déjeuner",
        type: "annonce",
        intervenant: "",
      },
      {
        debut: "12:40",
        fin: "13:20",
        title: "Libérez votre Potentiel Professionnel grâce à l'Open Source",
        type: "keynote",
        intervenant: "Geoffrey LOGOVI",
      },
      {
        debut: "13:20",
        fin: "13:30",
        title: "Annonce",
        type: "annonce",
        description: "",
      },
      {
        debut: "13:40",
        fin: "14:30",
        title: "Comment nous avons désigné et développé MiaPay",
        type: "keynote",
        intervenant: "Tav Denkey Jr",
      },
      {
        debut: "14:40",
        fin: "15:40",
        title: "Design review : Analyses et Approches Produit",
        type: "workshop",
        intervenant: "Tav Denkey Jr",
      },
      {
        debut: "15:40",
        fin: "16:40",
        title: "Processus ou stratégie Go-to-Market des start up africaines : Différence ou similitudes",
        type: "workshop",
        intervenant: "Grâce Nsota",
      },
      {
        debut: "17:00",
        fin: "17:30",
        title: "Fin de l’Africa Product Keynote #APK2024 x Réseautage B to B",
        type: "annonce",
        description: "",
      },
    ],


  }
]