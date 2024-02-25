import Image from "next/image"

import Button from "./button"
import expertImg from "../../public/assets/expert.png"


export default function ExpertSection() {
  return (
    <div className="ex-out flex justify-between bg-cyan-50">
      <div className="expert-outermost">
        <div className="expert-container">
          <div className="sub-exp-cont">
            <div className="expert-text space-y-5">
              <h1 className="text-2xl font-bold">
                Talk to our expert
              </h1>

              <p>
                Lorem ipsum dolor sit amet consectetur. Enim at porttitor nisi dui dignissim. Mattis ut <br></br> mauris tincidunt viverra. Feugiat pellentesque eu ornare mus.
              </p>

              <Button
                isArrow={true}
                title="Click to proceed"
                type="primary"
                className="px-8 py-5"
              />
            </div>
          </div>
        </div>
      </div>

      <Image
        src={expertImg}
        alt="img"
        height={50}
        width={350}
      />
    </div>
  )
}
