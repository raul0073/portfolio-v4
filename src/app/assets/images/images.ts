const BUCKET = process.env.BUCKET || process.env.NEXT_PUBLIC_BUCKET
export const images = {
    HERO: {
        heroImg: `${BUCKET}/v4/assets/IMG_0272_e.JPG`,
        heroMobileImg: `${BUCKET}/v4/assets/me1-noBG.png`,
    },
    ABOUT: {
        me: {
            profileAvatar: `${BUCKET}/v4/assets/profile_avatar_small.jpg`
        },
        work: {
            tahel: `${BUCKET}/v4/assets/entry.png`,
            experimental: `${BUCKET}/v4/saas/experimental/experimental_report.png`,
            rms: `${BUCKET}/v4/assets/rms-cut.png`,
        },
    },
    EXPERIENCE: {
        desert: `${BUCKET}/v4/assets/locations/desert.jpg`,
        bacalar: `${BUCKET}/v4/assets/locations/bacalar2.JPG`,
        zambia: `${BUCKET}/v4/assets/locations/zambia.JPG`,
        sa: `${BUCKET}/v4/assets/locations/southafrica.JPG`,
        malabo: `${BUCKET}/v4/assets/locations/malabo.jpg`,

    },
    PARALLAX: {
        bg: `${BUCKET}/v4/assets/noah_cut.png`,
        arrowImg: `${BUCKET}/v4/assets/Hand-drawn-arrow-blue_small.png`
    }


}