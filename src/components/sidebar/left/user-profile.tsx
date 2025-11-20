import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const UserProfile = () => {
    return (
        <div className="flex gap-x-3 items-center">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>S</AvatarFallback>
            </Avatar>
            <span className="transition-opacity duration-200 data-[state=closed]:opacity-0 data-[state=closed]:w-0 overflow-hidden">
                SUMUKH
            </span>
        </div>
    )
}

export default UserProfile
