import { Cart, User } from "@/domain/entities";
import { create } from "@bentoo/state-man";

export const useUserStore = create<User|null>(null);
export const useCartStore = create<Cart|null>(null);