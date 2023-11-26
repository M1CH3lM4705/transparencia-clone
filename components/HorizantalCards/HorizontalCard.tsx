
import { MenuLink } from "../Menu";
import { DisplayType } from "../Display/DisplayType";
import { ModelDefault } from "@/lib/AreaAtuacao/areasDeAtuacao";

export function HorizontalCard({icon, text}:ModelDefault) {
  return (
    <div className="bg-card-image bg-transparencia shadow-none bg-no-repeat bg-[length:100%_100%]">
      <div className="py-10 opacity-100 rounded-2xl h-58">
        <a href="#" className="w-full h-full center-block flex flex-col justify-center items-center gap-1">
          <MenuLink.Icon icon={icon!} size={70} color="white" />
          <DisplayType type={'h4'} className="color-primary text-white text-center break-words">
            <DisplayType className="uppercase text-sm/[15px] text-center" type={'span'}>{text}</DisplayType>
          </DisplayType> 
        </a>
      </div>
    </div>
  )
}