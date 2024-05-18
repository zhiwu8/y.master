import Image from "next/image"

const Ymaster = () => (
  <Image
    src="https://img2.imgtp.com/2024/05/19/FMBXhrHR.jpg"
    quality={95}
    width={64}
    height={64}
    priority={true}
    className="rounded-full"
    alt="Y.Master"
  />
)

export const ProfileImage = () => {
  return (
    <div className="group transform rounded-full bg-gradient-to-tl from-purple-700/60 to-rose-400/60 p-0.5 shadow-lg transition ease-out hover:scale-105 hover:from-purple-700 hover:to-rose-400 hover:shadow-rose-500/25 active:translate-y-px">
      <div className="h-[36px] w-[36px] rounded-full p-px transition duration-300 group-hover:scale-105">
        <Ymaster />
      </div>
    </div>
  )
}

export const ProfileImageLarge = () => {
  return (
    <div className="rounded-full bg-gradient-to-tl from-purple-700/60 to-rose-400/60 p-1 shadow-lg ring-[5px] ring-purple-500/10">
      <Ymaster />
    </div>
  )
}
