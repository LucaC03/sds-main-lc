import React from "react"
import { Image } from "./Image"
import figma from "@figma/code-connect"

/**
 * -- This file was auto-generated by `figma connect create` --
 * `props` includes a mapping from Figma properties and variants to
 * suggested values. You should update this to match the props of your
 * code component, and update the `example` function to return the
 * code example you'd like to see in Figma
 */

figma.connect(
  Image,
  "https://www.figma.com/design/ZsnQ5cWdKUH7CxwwjsAoNp/Simple-Design-System-(Community)?node-id=4049%3A13526",
  {
    props: {
      size: figma.enum("Size", {
        "20": "20",
        "24": "24",
        "32": "32",
        "40": "40",
        "48": "48",
        "16": "16",
      }),
    },
    example: (props) => <Image />,
  },
)
