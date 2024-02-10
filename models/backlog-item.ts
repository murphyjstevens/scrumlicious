import type { BacklogItemType } from "./enums/backlog-item-type";

export default interface BacklogItem {
  priority: number,
  title: string,
  type: BacklogItemType,
}