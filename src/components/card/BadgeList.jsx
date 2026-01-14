import React from "react";
import CardBadge from "../ui/CardBadge";

const BadgeList = ({ cardInfo }) => {
    return (
        <div className="absolute bottom-4 right-4 space-y-1.5 flex flex-col items-end">
            {cardInfo.badges.map((badge) => {
                return (
                    <CardBadge
                        icon={`${badge}.svg`}
                        label={badge === "payon" ? "후불 교통카드" : ""}
                    />
                );
            })}
        </div>
    );
};

export default BadgeList;
