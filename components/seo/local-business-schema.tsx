import React from "react"

export function LocalBusinessSchema() {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "Zahnarzt Dold Rheinfelden | Ihre Praxis für nachhaltige Zahnheilkunde",
        "image": "/team.png",
        "telephone": "+49 7623 62484",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Friedrichstr. 23",
            "addressLocality": "Rheinfelden (Baden)",
            "postalCode": "79618",
            "addressCountry": "DE"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 47.5401667,
            "longitude": 7.7885405
        },
        "url": "https://zahnarzt-dold.de",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:30",
                "closes": "11:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
                "opens": "14:00",
                "closes": "16:00"
            }
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
