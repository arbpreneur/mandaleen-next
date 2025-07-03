'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Package, MessageSquare, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MenuBar } from '@/components/ui/glow-menu';
import { cn } from '@/lib/utils';

const navigation = [
	{ name: 'Home', href: '/', icon: Home },
	{ name: 'About', href: '/about', icon: User },
	{ name: 'Product', href: '/product', icon: Package },
	{ name: 'Contact', href: '/contact', icon: MessageSquare },
];

const menuItems = [
	{
		icon: Home,
		label: 'Home',
		href: '/',
	},
	{
		icon: User,
		label: 'About',
		href: '/about',
	},
	{
		icon: Package,
		label: 'Product',
		href: '/product',
	},
	{
		icon: MessageSquare,
		label: 'Contact',
		href: '/contact',
	},
];

export function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const getActiveItem = () => {
		const currentItem = menuItems.find(item => item.href === pathname);
		return currentItem?.label || 'Home';
	};

	const handleMenuItemClick = (label: string) => {
		const item = menuItems.find(item => item.label === label);
		if (item) {
			window.location.href = item.href;
		}
	};

	return (
		<motion.header
			className={cn(
				'fixed top-0 w-full z-50 transition-all duration-300',
				scrolled
					? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
					: 'bg-transparent'
			)}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.6 }}
		>
			<nav className="container-custom">
				<div className="flex items-center justify-between h-16 lg:h-20">
					{/* Logo */}
					<Link href="/" className="flex items-center space-x-2 group">
						<div className="relative">
							<img
								src="/mandaleen-logo.png"
								alt="Mandaleen Logo"
								className="h-8 w-8 object-contain"
							/>
						</div>
						<span className="text-2xl font-bold" style={{ color: '#181818' }}>
							Mandaleen
						</span>
					</Link>

					{/* Desktop Navigation - Minimalist Glow Menu */}
					<div className="hidden lg:flex items-center">
						<MenuBar
							items={menuItems}
							activeItem={getActiveItem()}
							onItemClick={handleMenuItemClick}
						/>
					</div>

					{/* CTA Button */}
					<div className="hidden lg:block">
						<Button
							className="gradient-bg gradient-hover font-medium px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
							asChild
						>
							<a
								href="https://wa.me/962796660020"
								target="_blank"
								rel="noopener noreferrer"
							>
								WhatsApp Us
								<span className="inline-block align-middle">
									<svg
										className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M5 12h14m0 0-4-4m4 4-4 4"
										/>
									</svg>
								</span>
							</a>
						</Button>
					</div>

					{/* Mobile menu button */}
					<button
						className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#FF7A00] focus-ring"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle menu"
					>
						{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</div>

				{/* Mobile Navigation */}
				<AnimatePresence>
					{isOpen && (
						<motion.div
							className="lg:hidden"
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
						>
							<div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-gray-200/50">
								{navigation.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className={cn(
											'block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300',
											pathname === item.href
												? 'text-[#FF7A00] bg-orange-50'
												: 'text-gray-700 hover:text-[#FF7A00] hover:bg-gray-50'
										)}
										onClick={() => setIsOpen(false)}
									>
										{item.name}
									</Link>
								))}
								<div className="pt-2">
									<Button className="w-full font-medium shadow-lg group gradient-bg gradient-hover px-6 py-2 transition-all duration-300" asChild>
										<a
											href="https://wa.me/962796660020"
											target="_blank"
											rel="noopener noreferrer"
										>
											WhatsApp Us
											<span className="inline-block align-middle">
												<svg
													className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
													fill="none"
													stroke="currentColor"
													strokeWidth="2"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M5 12h14m0 0-4-4m4 4-4 4"
													/>
												</svg>
											</span>
										</a>
									</Button>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>
		</motion.header>
	);
}