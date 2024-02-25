import TestimonialsCard from "./testimonials-card";


export default function TestimonialsSection() {
  return (
    <section className='p-24 space-y-16'>
      <h1 className="text-2xl font-bold text-center">
        Here’s what people are saying about CREDITSEA
      </h1>

      {/* <div className="flex flex-1 flex-grow flex-wrap items-start justify-center gap-7"> */}
      <div className="grid grid-cols-3 gap-7">
        <TestimonialsCard
          desc="Lorem ipsum dolor sit amet consectetur. Enim at porttitor nisi dui dignissim. Mattis ut mauris tincidunt viverra. Feugiat pellentesque eu ornare mus bibendum fringilla elementum tincidunt. Amet tellus eros volutpat laoreet nulla."
          imgSrc="https://s3-alpha-sig.figma.com/img/b4fd/c5f1/cd1bb2882384f368d032f2df38c571cc?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hQiYylOPjoBGYLz8lATMPRamXoVqpPFNd1sf5aqJPus7TetIBEsiBhFAuhszl3B~2c-70fxjYKhhNbEsAq00cm5SUFpmlE19lw3Ab7WKeauNFNycpkmbCIhYpzciDrApjYxaMrgmLV3IXirf7nd2uSbe4tGdeJh8PQS3v7GWmwU~awk3NK6hXTb-tA7VRGaA1irtbJ7pOpYbJAo~KTmSxP5jvYTmfLMGaz80iGyKu52fHilCWIPx0FbLqvhHPVY9DphnhLkPFosdbl5OijMR-u1hUqc~QHqoYowJiXQS0IvxysnJVYY2bqGN-nCW5fTWc1TWZB-h9GB2AiQLEkNrCA__"
          name="Kaushik Roy"
          stars={4.5}
        />

        <TestimonialsCard
          desc="Lorem ipsum dolor sit amet consectetur. Enim at porttitor nisi dui dignissim. Mattis ut mauris tincidunt viverra. Feugiat pellentesque eu ornare mus bibendum fringilla elementum tincidunt. Amet tellus eros volutpat laoreet nulla.  Feugiat pellentesque eu ornare mus bibendum fringilla elementum tincidunt. Amet tellus eros volutpat laoreet nulla."
          imgSrc="https://s3-alpha-sig.figma.com/img/34da/9f6a/9532aafe523d2c1558bd0826b3587ba1?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dbFy6XASr3hCn0y9xuSBC7xjtAQS12kf4vBvHECA8S9g8QtbYB~slY4MvBu8pkjax3pUDn5BbkqEOSssfkAtxGb6Up3kneg5LdCOx3SWJj72IDtVQYiPMxHYUkSQN3BwL-LqYB5iBdMk64AVLhpna4i6Bs9lu2MkkGWYC9PzrGcPBa10k8H3vIUO0HWI8G9EziZEI~7E83SZq83s4Mg3gbouExajiE8f9VrHEHIoMfTsBlbSU9sdI9hhFH8Gyu~7SbnMaOoz~JZm~B~I~Y9xk5VYQtwWhUG7panwOSdJkpd1C2saOhZTQGFtCniKKIAGfTEpfKYwJaOIkeGp6hDVCg__"
          name="Rohit Yadav"
          stars={4}
        />

        <TestimonialsCard
          desc="Lorem ipsum dolor sit amet consectetur. Enim at porttitor nisi dui dignissim. Mattis ut mauris tincidunt viverra. Feugiat pellentesque eu ornare mus bibendum fringilla elementum tincidunt. Amet tellus eros volutpat laoreet nulla."
          imgSrc="https://s3-alpha-sig.figma.com/img/090f/215c/7f9ff2e32b14d9a03d5f01c8a0a17549?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FvEZxj8-wrtU~8eTKJeSt~LfVqRJi9a-aR0nlIDblWEqJERUVw9XDEICs2bBdsTBP5CoXrEb~f-mZKYJmwgT20tiveTe-bfAURxtRBPmLEHLD239u0Eg0~prl5o4lQYsy11LE~JrCjLLkn6VPe~XEGcGq5nWmffbC-LjRkP06KIToFbkPoBLVXNBIy1gTp4sQqfXHtJMGiw8R9pcZsrcADyWDmQhb~OTfhubJfTw7w1KF89YE3JKEUZ2iG55~iEr8op4ErKw894hJVHnwOw3XQLgDkuK31NlSnb2bxrGRVTEVNtNRFamh5KiCFtwFIyLX5Lu4QCq8uXZ9E7azOYnkQ__"
          name="Manoj Singh"
          stars={4.5}
        />

        <TestimonialsCard
          desc="Lorem ipsum dolor sit amet consectetur. Enim at porttitor nisi dui dignissim. Mattis ut mauris tincidunt viverra. Feugiat pellentesque eu ornare mus bibendum fringilla elementum tincidunt. Amet tellus eros volutpat laoreet nulla."
          imgSrc="https://s3-alpha-sig.figma.com/img/d5c2/4c39/877664e4ebf89b2f38924a82eb02b8e7?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IcKmaY99dMWODuZKFoXgTlCP4GI~wYtkoSWzG-v4mu5pagfwMAaJaIR2XgW4MVbLbmn2UI-uJTXyJsWCM122GmH9vugKOK5FYitG6aGFRm3xQXi1KHTPUaPMoKkY36pSfw2CFDKxp7sA97Xc1qJV0vcIQ6~ObEB5eaTw4K0XOfYYQvK42oOnQrupzT8wW~hYbMqZr1foUGmrXrbYuhKeg6Mf7nI~QQdU-jjsS2SmUz6lFzBpIUgJVidd2rZJ5zkgaPJ1TzwaAMOK6GrENkqwAyH7HM0SEFbS~m-dje6wXo1SkfaecS0QL5YiRHQevgUAgi5I9sGZVPuMu39xrG~GGw__"
          name="Anny"
          stars={5}
        />

        <TestimonialsCard
          desc="Lorem ipsum dolor sit amet consectetur. Enim at porttitor nisi dui dignissim. Mattis ut mauris tincidunt viverra. Feugiat pellentesque eu ornare mus bibendum fringilla elementum tincidunt. Amet tellus eros volutpat laoreet nulla."
          imgSrc="https://s3-alpha-sig.figma.com/img/e2c2/3a23/07de1b940080aca2c269e75d73b409b0?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HpUGDRXY1QR0bCIT5UiOGH-cwo1GmttAW4mq0k3QMx-TE6hNrD6twgqzmNncVPsmggqcrmR~-EiYVlYHDrSbuIpQkm5U6sH3KSgAq7678ptq5FIQdrIINGGRDnvF5~V2KHqTzF1L6BjB42c4DycvU6NBRL8Sf5hmw6pOMFfGYnOsIme8nvSz7PCTcJepFutn9xEXg88r34FTBVaN6kY0Snfn~D5vCTLMilZEFiyeLykr-reQwwVrtC5HUSwkrchpUBSYZfPMWXv-VcHs~ww0rXwxKUtbh1IEzso7MYm6GZhoDVbIT4fQbAQnG47IIe4PJLEpY-bejLp8QWZDpb8xgw__"
          name="Jake"
          stars={3.5}
        />

        <TestimonialsCard
          desc="Lorem ipsum dolor sit amet consectetur. Enim at porttitor nisi dui dignissim. Mattis ut mauris tincidunt viverra. Feugiat pellentesque eu ornare mus "
          imgSrc="https://s3-alpha-sig.figma.com/img/b4fd/c5f1/cd1bb2882384f368d032f2df38c571cc?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hQiYylOPjoBGYLz8lATMPRamXoVqpPFNd1sf5aqJPus7TetIBEsiBhFAuhszl3B~2c-70fxjYKhhNbEsAq00cm5SUFpmlE19lw3Ab7WKeauNFNycpkmbCIhYpzciDrApjYxaMrgmLV3IXirf7nd2uSbe4tGdeJh8PQS3v7GWmwU~awk3NK6hXTb-tA7VRGaA1irtbJ7pOpYbJAo~KTmSxP5jvYTmfLMGaz80iGyKu52fHilCWIPx0FbLqvhHPVY9DphnhLkPFosdbl5OijMR-u1hUqc~QHqoYowJiXQS0IvxysnJVYY2bqGN-nCW5fTWc1TWZB-h9GB2AiQLEkNrCA__"
          name="Samita"
          stars={5}
        />
      </div>
    </section>
  )
}
