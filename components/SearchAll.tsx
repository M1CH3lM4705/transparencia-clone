import { Search } from "lucide-react";
import { Button } from "./Button";
import { Form } from "./Form";
import { MenuLink } from "./Menu/index";
import { Section } from "./Section/SectionContainer";

export function SearchAll() {
  return (

    <Section className="flex justify-center">
      <div className="w-2/3 bg-white rounded py-4 my-3">
        <Form.Root className="gap-2 px-3">
          <Form.Input type="text" />
          <Button className="bg-[#E2A82B] py-1 px-4 rounded">
            <MenuLink.Icon icon={Search} color={"white"} />
          </Button>
        </Form.Root>
      </div>
    </Section>

  )
}