import { memberDetails } from "mock/members";
import React from "react";

export const MembersCard = () => {
    return (
        <div class="row medium-uncollapse">
            {memberDetails?.length >= 1 &&
                memberDetails?.map((data) => {
                    return <div class="large-4 medium-6 column contact-person-item">
                        <img
                            class="thmb full-width"
                            src={data?.img}
                            alt="Zeitarbeit Köln"
                        />
                        <div class="row">
                            <div class="medium-7 ">
                                <div class="name yellow-text p-bigger">
                                    <p>{data?.name}</p>
                                </div>
                            </div>
                            <div class="medium-5 column actions">
                                <a href="mailto:i.yelen@konnex-zeitarbeit.de">
                                    <span class="icon icon-mail-icon">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                    </span>
                                </a>
                                <a href="../wp-content/uploads/2015/04/Isa-Yelen.vcf">
                                    <span class="icon icon-v-card-icon">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                    </span>
                                </a>
                                <a
                                    href="https://www.xing.com/profile/Isa_Yelen"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <span class="icon icon-xing-icon">
                                        <span class="path1"></span>
                                        <span class="path2"></span>
                                        <span class="path3"></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <p class="position">{data?.description}</p>
                    </div>;
                })}
        </div>
    );
};
