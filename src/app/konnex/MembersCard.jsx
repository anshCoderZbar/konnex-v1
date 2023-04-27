import { memberDetails } from "mock/members";
import React from "react";

export const MembersCard = () => {
    return (
        <div className="row medium-uncollapse">
            {memberDetails?.length >= 1 &&
                memberDetails?.map((data) => {
                    return <div className="large-4 medium-6 column contact-person-item">
                        <img
                            className="thmb full-width"
                            src={data?.img}
                            alt="Zeitarbeit Köln"
                        />
                        <div className="row">
                            <div className="medium-7 ">
                                <div className="name yellow-text p-bigger">
                                    <p>{data?.name}</p>
                                </div>
                            </div>
                            <div className="medium-5 column actions">
                                <a href="mailto:i.yelen@konnex-zeitarbeit.de">
                                    <span className="icon icon-mail-icon">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </span>
                                </a>
                                <a href="../wp-content/uploads/2015/04/Isa-Yelen.vcf">
                                    <span className="icon icon-v-card-icon">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                    </span>
                                </a>
                                <a
                                    href="https://www.xing.com/profile/Isa_Yelen"
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    <span className="icon icon-xing-icon">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <p className="position">{data?.description}</p>
                    </div>;
                })}
        </div>
    );
};
