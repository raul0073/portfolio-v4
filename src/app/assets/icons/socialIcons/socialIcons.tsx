const linkedLink = process.env.NEXT_PUBLIC_LINKEDIN
const gitLink = process.env.NEXT_PUBLIC_GITHUB
const mail = `mailto:${process.env.NEXT_PUBLIC_EMAIL}`
export const SOCIAL_ICONS = [
    {name: "LinkedIn", class: "devicon-linkedin-plain", link: linkedLink},
    {name: "GitHub", class: "devicon-github-original", link: gitLink},
    {name: "Gmail", class: "devicon-google-plain", link: mail},
]

