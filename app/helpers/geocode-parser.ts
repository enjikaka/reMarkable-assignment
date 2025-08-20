type Address = {
    city?: string;
    village?: string;
    town?: string;
    municipality?: string;
};

export function parseTown(address: Address): string {
    return address.city ?? address.village ?? address.town ?? address.municipality ?? 'Unknown place';
}