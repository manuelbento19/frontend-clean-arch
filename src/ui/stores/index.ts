import { User } from "@/domain/entities";
import { create } from "@bentoo/state-man";

export const useUserStore = create<User|null>(null);