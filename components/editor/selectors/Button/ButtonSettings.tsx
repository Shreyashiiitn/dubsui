import React from "react"

import { ToolbarItem, ToolbarSection } from "@/components/editor"
import { ToolbarRadio } from "@/components/editor/Toolbar/ToolbarRadio"

export const ButtonSettings = () => {
  return (
    <React.Fragment>
      <ToolbarSection
        title="Colors"
        props={["color"]}
        summary={({ background, color }: any) => {
          return (
            <div className="flex flex-row-reverse">
              <div className="flex-end flex h-6 w-6 items-center rounded-full bg-black text-center shadow-md">
                <p
                  style={{
                    color: color && `rgba(${Object.values(color)})`,
                  }}
                  className="w-full text-center text-white"
                >
                  T
                </p>
              </div>
            </div>
          )
        }}
      >
        <ToolbarItem full={true} propKey="color" type="color" label="Text" />
      </ToolbarSection>
      <ToolbarSection
        title="Margin"
        props={["margin"]}
        summary={({ margin }: any) => {
          return `${margin[0] || 0}px ${margin[1] || 0}px ${margin[2] || 0}px ${
            margin[3] || 0
          }px`
        }}
      >
        <ToolbarItem propKey="margin" index={0} type="slider" label="Top" />
        <ToolbarItem propKey="margin" index={1} type="slider" label="Right" />
        <ToolbarItem propKey="margin" index={2} type="slider" label="Bottom" />
        <ToolbarItem propKey="margin" index={3} type="slider" label="Left" />
      </ToolbarSection>
      <ToolbarSection title="Decoration">
        <ToolbarItem propKey="buttonStyle" type="radio" label="Style">
          <ToolbarRadio value="outline" label="Outline" />
          <ToolbarRadio value="default" label="Primary" />
          <ToolbarRadio value="secondary" label="Secondary" />
          <ToolbarRadio value="destructive" label="Destructive" />
        </ToolbarItem>
      </ToolbarSection>
    </React.Fragment>
  )
}
