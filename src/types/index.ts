export interface Profile {
   address: string | null;
   status: 'Active' | 'Pending' | 'InActive';
   role: 'Owner' | 'Monitor' | 'Manager' | 'Member';
   userId: string;
   mealId: string | null;
   balance: number;
   bazarId: string | null;
   managerSince: Date;
}
