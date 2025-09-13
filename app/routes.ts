import { type RouteConfig, route, layout } from "@react-router/dev/routes";
// import path from "path";

export default [
    layout('routes/admin/admin-layout.tsx', [
        route('dashboard', 'routes/admin/dashboard.tsx'),
        route('all-users', 'routes/admin/all-users.tsx')
    ]),  
    
] satisfies RouteConfig;