import * as Lynx from '@lynx-js/types'

declare module "@lynx-js/types" {
    interface IntrinsicElements extends Lynx.IntrinsicElements {
        input: any
    }
}