"use client";

import {
  // Base
  Code2, PenTool, GraduationCap, Wrench, ShoppingBag,
  Globe, Smartphone, Server, Network, Lightbulb,
  BookOpen, ShieldCheck, MonitorSmartphone, Printer,
  Palette,
 MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Monitor, Link2, Ruler, FlaskConical, Code, UploadCloud,
  ChartCandlestick, Layout, Image as ImageIcon, Film,
  Eye, Users, Zap, Layers, Cpu, HardDrive, Axe, Shield,
  Clock, Settings, ShoppingCart, Cable, Wifi,
  BatteryCharging, Headphones, Mouse, Laptop, Battery,
  Usb, Search, Truck, FileText, Sparkles, CheckCircle,
  Package,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Code2, PenTool, GraduationCap, Wrench, ShoppingBag,
  Globe, Smartphone, Server, Network, Lightbulb,
  BookOpen, ShieldCheck, MonitorSmartphone, Printer,
  Palette,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Monitor, Link2, Ruler, FlaskConical, Code, UploadCloud,
  ChartCandlestick, Layout, Image: ImageIcon, Film,
  Eye, Users, Zap, Layers, Cpu, HardDrive, Axe, Shield,
  Clock, Settings, ShoppingCart, Cable, Wifi,
  BatteryCharging, Headphones, Mouse, Laptop, Battery,
  Usb, Search, Truck, FileText, Sparkles, CheckCircle,
  Package,
};

interface IconProps {
  name: string;
  className?: string;
}

export default function Icon({ name, className }: IconProps) {
  const LucideIcon = ICONS[name];
  if (!LucideIcon) return null;
  return <LucideIcon className={className} />;
}