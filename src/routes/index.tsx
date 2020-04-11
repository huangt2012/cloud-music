import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { Home, Recommend, Singers, Rank } from '../application'

const routes = [
    {
        path: "/",
        component: Home,
        routes: [
            {
                path: "/",
                exact: true,
                component: Recommend
            },
            {
                path: "/recommend",
                component: Recommend
            },
            {
                path: "/singers",
                component: Singers
            },
            {
                path: "/rank",
                component: Rank
            }
        ]
    }
]

export default routes