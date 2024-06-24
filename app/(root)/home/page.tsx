import CertificationsCard from '@/components/shared/certifications-card'
import HealthSafetyCard from '@/components/shared/healthsafety-card'
import IdeasCard from '@/components/shared/ideas-card'
import IssuesCard from '@/components/shared/issues-card'
import Plane from '@/components/shared/plane'
import PointsCard from '@/components/shared/points-card'
import ProductionCard from '@/components/shared/production-card'
import QualityCard from '@/components/shared/quality-card'
import QualityIssuesCard from '@/components/shared/quality-issues-card'
import TransactionsCard from '@/components/shared/transacrions-card'

import React from 'react'

const Page = () => {
    return (
        <>
            <div className="p-8 flex justify-start w-full gap-8">

                <CertificationsCard />
                <IdeasCard />
                <PointsCard />

            </div>
            <div className="px-8 flex justify-start w-full gap-8 ">
                < HealthSafetyCard />
                <QualityCard />
                <ProductionCard />
            </div>
            <div className="p-8 flex justify-start w-full gap-8 ">
                <IssuesCard />
                <TransactionsCard />

            </div>
        </>
    )
}

export default Page