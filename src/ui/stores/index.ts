import { Cart, Order, User } from "@/domain/entities";
import { create } from "@bentoo/state-man";

export const useUserStore = create<User|null>(null);
export const useCartStore = create<Cart|null>(null);
export const useOrderStore = create<Order[]>([]);