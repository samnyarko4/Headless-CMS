import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/Lookerz/Documents/SummertSchool23/webdev-IV/headlessCMS/Headless-CMS/headless-cms/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}