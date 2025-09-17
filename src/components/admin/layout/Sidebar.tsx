'use client';
import Link from 'next/link';
import { LayoutDashboard, Users, Megaphone, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';


const navItems = [
{ href: '/admin', icon: LayoutDashboard, label: 'Dashboard' },
{ href: '/admin/users', icon: Users, label: 'Users' },
{ href: '/admin/ads', icon: Megaphone, label: 'Ads' },
{ href: '/admin/payments', icon: CreditCard, label: 'Payments' },
];


export default function Sidebar() {
return (
<aside className="w-64 bg-white border-r shadow-sm">
<div className="p-4 text-2xl font-bold text-primary">Admin</div>
<nav className="p-4 space-y-1">
{navItems.map(({ href, icon: Icon, label }) => (
<Link key={href} href={href} className={cn('flex items-center gap-3 p-2 rounded hover:bg-gray-100')}> <Icon className="w-5 h-5" /> {label} </Link>
))}
</nav>
</aside>
);
}