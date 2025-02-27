import {
  Button,
  CollapsibleContent,
  CollapsibleRoot,
  CollapsibleTrigger,
} from "dubsui"
import { ChevronsUpDown } from "lucide-react"

export default function CollapsibleGranular() {
  return (
    <CollapsibleRoot className="w-[350px] space-y-2 dark:text-white">
      <div className="flex items-center justify-between space-x-4 px-4">
        <h4 className="text-sm font-semibold">Choose the flavour of dubsui</h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="rounded-md border px-4 py-3 font-mono text-sm">
        @Shreyashiiitn/dubsui
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          devstomorrow/dubsui
        </div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">
          3dubs/dubsui
        </div>
      </CollapsibleContent>
    </CollapsibleRoot>
  )
}
