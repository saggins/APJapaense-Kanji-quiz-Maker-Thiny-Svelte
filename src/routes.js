import TestPage from './routes/TestPage.svelte'
import Home from './routes/Home.svelte'
export const routes = {
    '/' : Home,
    '/test/:id' : TestPage
}