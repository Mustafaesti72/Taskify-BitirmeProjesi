import tw from 'tailwind.macro';

export const AvatarContainer = tw.div`cursor-pointer`;

// Increase the width and height classes to make the AvatarImage bigger
export const AvatarImage = tw.img`rounded-full w-16 h-16`;

export const Initials = tw.div`
w-8 h-8 flex-shrink-0 rounded-full inline-flex items-center justify-center text-white relative z-10`;
