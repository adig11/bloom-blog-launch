import avatarImage from "@/assets/avatar.png";

export const Avatar = () => {
  return (
    <div className="animate-float">
      <div className="relative">
        <div className="absolute inset-0 rounded-full border-4 border-avatar-border" />
        <img
          src={avatarImage}
          alt="Blog Author Avatar"
          className="h-40 w-40 rounded-full object-cover ring-4 ring-avatar-border ring-offset-4 ring-offset-background md:h-48 md:w-48"
        />
      </div>
    </div>
  );
};
