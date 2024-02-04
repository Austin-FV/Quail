import { Button } from "@/components/ui/button";
import Image from "next/image";
import { prisma } from "@/lib/db";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export default function Home() {
  return (
    <Button>Hello World</Button>
    // <Popover>
    //   <PopoverTrigger><Button>Open</Button></PopoverTrigger>
    // <PopoverContent>Place content for the popover here.</PopoverContent>
    // </Popover>
  );
}
