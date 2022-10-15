import glob from 'fast-glob'
import { readFileSync } from 'fs'
import { join, parse } from 'path'
import type { DefaultTheme } from 'vitepress'

const ROOT = join(process.cwd(), 'docs')
const TITLE_RE = /#{1,6}\s*(.*)\s*\n?/

const sidebar: DefaultTheme.SidebarGroup[] = glob
  .sync('./*', {
    cwd: ROOT,
    onlyDirectories: true
  })
  .map((group) => ({
    text: group,
    items: glob
      .sync('./*.md', {
        absolute: true,
        cwd: join(ROOT, group)
      })
      .map((filepath) => {
        const { name } = parse(filepath)
        return {
          link: `/${group}/${name === 'index' ? '' : name}`,
          text: readFileSync(filepath, 'utf-8').match(TITLE_RE)?.[1] ?? name
        }
      }),
    collapsible: true
  }))

export default sidebar
