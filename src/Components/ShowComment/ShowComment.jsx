import React from 'react';

const ShowComment = ({com}) => {
    const{profile,name,commentValue}=com
    return (
        <div>
            <div class="flex mt-7 justify-start items-center gap-10 md:gap-4">
                <label>
                    <img class="w-12 h-12 rounded-full" src={profile} alt="" />
                    </label>
                    <div class="font-mplus space-y-1">
                        <h4 class="text-xl bg-green-200 px-3 py-3 rounded-lg">{commentValue}</h4>
                        <h3 class="font-sm ">-{name}</h3>
                        
                        </div>
                        </div>
        </div>
    );
};

export default ShowComment;