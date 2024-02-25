import Accordion from "./accordion"


export default function FAQSection() {
  return (
    <section className='py-28 px-10 space-y-16'>
      <h1 className='text-3xl font-bold text-center'>
        FAQs - Get Answers Here!
      </h1>

      <div className="space-y-5">
        <Accordion 
          ques="Lorem ipsum dolor sit amet consectetur?"
          answer="Lorem ipsum dolor sit amet consectetur. Accumsan egestas enim malesuada in. Sed interdum dolor in phasellus eleifend. Eu diam mi risus eget elementum sed viverra. Pulvinar pellentesque blandit fames amet laoreet viverra interdum in interdum."
        />
        <Accordion 
          ques="Lorem ipsum dolor sit amet consectetur?"
          answer="Lorem ipsum dolor sit amet consectetur. Accumsan egestas enim malesuada in. Sed interdum dolor in phasellus eleifend. Eu diam mi risus eget elementum sed viverra. Pulvinar pellentesque blandit fames amet laoreet viverra interdum in interdum."
        />
        <Accordion 
          ques="Lorem ipsum dolor sit amet consectetur?"
          answer="Lorem ipsum dolor sit amet consectetur. Accumsan egestas enim malesuada in. Sed interdum dolor in phasellus eleifend. Eu diam mi risus eget elementum sed viverra. Pulvinar pellentesque blandit fames amet laoreet viverra interdum in interdum."
        />
        <Accordion 
          ques="Lorem ipsum dolor sit amet consectetur?"
          answer="Lorem ipsum dolor sit amet consectetur. Accumsan egestas enim malesuada in. Sed interdum dolor in phasellus eleifend. Eu diam mi risus eget elementum sed viverra. Pulvinar pellentesque blandit fames amet laoreet viverra interdum in interdum."
        />
        <Accordion 
          ques="Lorem ipsum dolor sit amet consectetur?"
          answer="Lorem ipsum dolor sit amet consectetur. Accumsan egestas enim malesuada in. Sed interdum dolor in phasellus eleifend. Eu diam mi risus eget elementum sed viverra. Pulvinar pellentesque blandit fames amet laoreet viverra interdum in interdum."
        />
      </div>
    </section>
  )
}
