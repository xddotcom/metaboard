export const dangerousStore = {
  store: null
}

export default async ({ store }) => {
  dangerousStore.store = store
}
