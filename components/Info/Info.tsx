import * as React from "react";

export interface IInfoProps {}

export default function Info(props: IInfoProps) {
  return (
    <div className="w-full h-5/6">
      <h1 className="text-2xl font-semibold text-center mb-8">
        Safety and Security
      </h1>
      <div className="flex w-full h-full">
        <div className="w-fit lg:w-2/6 bg-auto bg-no-repeat bg-center bg-[url('https://images.unsplash.com/photo-1590856029847-4956f6a5fd92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80')]  "></div>
        <div className="w-fit lg:w-3/4">
          <p className="px-4 text-ellipsis text-lg">
            The United Kingdom has seen a significant rise in car thefts in
            recent years, with vehicle thefts increasing by 50% in the five
            years to 2018. This has led to growing concerns about the security
            of cars when parked in public places. Car theft is not only a major
            financial loss but can also cause significant emotional distress for
            the owner. The advancement of technology has made it easier for
            criminals to steal cars, which makes it even more crucial for car
            owners in the UK to take extra measures to protect their vehicles.
            Measures such as using physical locks, parking in well-lit areas,
            and installing security cameras are essential to prevent car theft
            and ensure the safety of car owners and their belongings. The need
            for increased security measures is critical to prevent car theft and
            minimize the impact of this rising trend. It is crucial for the
            authorities to take action and encourage car owners to take
            necessary security measures to make our streets and parking lots
            safer for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}
