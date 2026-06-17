type OfficersItem ={
    id: number;
    insignia: string;
    title: string;
    paygrade: string;
    description: string;
}

export const officers: OfficersItem[] = [
    {
      id: 1,
      insignia: '/static/ranks-general.png',
      title: 'General',
      paygrade: 'O-10',
      description:
        'A four-star general, the most senior officer rank, a General is nominated by the President and must also be confirmed for duty by the Senate.'
    },
    {
      id: 2,
      insignia: '/static/ranks-lieutenant-general.png',
      title: 'Lieutenant General',
      paygrade: 'O-9',
      description:
        'A three-star general, a Lieutenant General is nominated by the President and must also be confirmed for duty by the Senate.'
    },
    {
      id: 3,
      insignia: '/static/ranks-major-general.png',
      title: 'Major General',
      paygrade: 'O-8',
      description:
        'A two-star general, a Major General is nominated by the President and must also be confirmed for duty by the Senate'
    },
    {
      id: 4,
      insignia: '/static/ranks-brigadier-general.png',
      title: 'Brigadier General',
      paygrade: 'O-7',
      description:
        'A one-star general, a Brigadier General is nominated by the President and must also be confirmed for duty by the Senate.'
    },
    {
      id: 5,
      insignia: '/static/ranks-colonel.png',
      title: 'Colonel',
      paygrade: 'O-6',
      description: 'Serves as a regimental commander, brigade executive officer, or division staff member.'
    },
    {
      id: 6,
      insignia: '/static/ranks-lieutenant-colonel.png',
      title: 'Lieutenant Colonel',
      paygrade: 'O-5',
      description: 'A key decision-maker; may serve as a battalion commander.'
    },
    {
      id: 7,
      insignia: '/static/ranks-major.png',
      title: 'Major',
      paygrade: 'O-4',
      description:
        'Typically serves in roles including battalion executive officer, weapons company commanders, or regimental or brigade staff members.'
    },
    {
      id: 8,
      insignia: '/static/ranks-captain.png',
      title: 'Captain',
      paygrade: 'O-3',
      description:
        'Responsible for leading entire companies of Marines, serving as company commander, leading tactical operations with the support of junior commissioned officers and senior enlisted noncommissioned officers.'
    },
    {
      id: 9,
      insignia: '/static/ranks-first-lieutenant.png',
      title: 'First Lieutenant',
      paygrade: 'O-2',
      description:
        'Leads in a similar way as a second lieutenant but with increased responsibility immediately upon promotion.'
    },
    {
      id: 10,
      insignia: '/static/ranks-second-lieutenant.png',
      title: 'Second Lieutenant',
      paygrade: 'O-1',
      description: 'Leads at the platoon or company level and looks to their senior officers for guidance and intent.'
    }
  ];

type EnlistsItem = {
    id: number;
    insignia: string;
    title: string;
    paygrade: string;
    description: string;

}
  export const enlists: EnlistsItem [] = [
    {
      id: 1,
      insignia: '/static/ranks-first-master-sergeant.png',
      title: 'First Chief Master Sergeant',
      paygrade: 'E-10',
      description:
        'Serves as the personal adviser of the Chief of Staff, Armed Forces of the Philippines in developing plans, programs, and regulations for the military professionalism of all enlisted AFP personnel.'
    },
    {
      id: 2,
      insignia: '/static/ranks-chief-master-sergeant.png',
      title: 'Chief Master Sergeant',
      paygrade: 'E-9',
      description:
        'Highest attainable rank for enlisted personnel. Some chief master sergeants manage the efforts of all enlisted personnel within their unit or a major subsection thereof, while others run major staff functions at higher headquarter levels.'
    },
    {
      id: 3,
      insignia: '/static/ranks-senior-master-sergeant.png',
      title: 'Senior Master Sergeant',
      paygrade: 'E-8',
      description:
        "Senior master sergeants typically assume superintendent duties, overseeing enlisted members's efforts to accomplish a major segment of a unit's mission. They are expected to serve as mentors for noncommissioned and junior commissioned officers."
    },
    {
      id: 4,
      insignia: '/static/ranks-master-sergeant.png',
      title: 'Master Sergeant',
      paygrade: 'E-7',
      description:
        'Master Sergeants are the technical managers, they may serve on Battalion, Regiment, or Brigade level staff, advising Majors or Lieutenant Colonels of the readiness of their units with equipment and programs.'
    },
    {
      id: 5,
      insignia: '/static/ranks-technical-sergeant.png',
      title: 'Technical Sergeant',
      paygrade: 'E-6',
      description:
        'The technical sergeant rank is tasked with carrying out highly technical duties, along with supervising lower-ranking non-commissioned officers.'
    },
    {
      id: 6,
      insignia: '/static/ranks-staff-sergeant.png',
      title: 'Staff Sergeant',
      paygrade: 'E-5',
      description:
        'Staff Sergeant is a generally experienced Marine with 10–13 years of service. They are also responsible for the competency, training, and management of the Marines under their command.'
    },
    {
      id: 7,
      insignia: '/static/ranks-sergeant.png',
      title: 'Sergeant',
      paygrade: 'E-4',
      description:
        'Sergeants serve as squad leaders in combat operations and lead a squad of eight soldiers, including one or more Corporals.'
    },
    {
      id: 8,
      insignia: '/static/ranks-corporal.png',
      title: 'Corporal',
      paygrade: 'E-3',
      description:
        'Corporals usually command small contingents of Marines in combat and operations, including four-man fireteams or eight-man squads consisting of two fireteams.'
    },
    {
      id: 9,
      insignia: '/static/ranks-private-first-class.png',
      title: 'Private First Class',
      paygrade: 'E-2',
      description:
        'Private First Class is expected to serve as a model for newly enlisted troops and carry out the orders of their superior officers to the best of their abilities.'
    },
    {
      id: 10,
      insignia: '/static/ranks-private.png',
      title: 'Private',
      paygrade: 'E-1',
      description:
        'Private is the entry-level rank in the Marine Corps. Usually receive a promotion to Private First Class after serving for a specified amount of time.'
    }
  ];