import { TestBed, getTestBed } from '@angular/core/testing';
import { Profile } from '../models/profile';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';


import { ProfileService } from './profile.service';

xdescribe('ProfileService', () => {

  let injector: TestBed;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    })

    injector = getTestBed()
    httpMock = injector.get(HttpTestingController)
  });

  afterEach(() => {
     httpMock.verify()
  })

  it('should be created', () => {
    const service: ProfileService = TestBed.get(ProfileService);
    expect(service).toBeTruthy();
  });


  it('should be return an Observer<Profile[]>', () => {
      let service:ProfileService = TestBed.get(ProfileService)
      let mockUser: Profile[] = [
          {
            gender: "female",
            name: {
              title: "mademoiselle",
              first: "josefina",
              last: "perrin"
            },
            location: {
              street: "5832 rue barrier",
              city: "trélex",
              state: "schwyz",
              postcode: 9803,
              coordinates: {
                latitude: "-58.1138",
                longitude: "85.6415"
              },
              timezone: {
                offset: "-12:00",
                description: "Eniwetok, Kwajalein"
              }
            },
            email: "josefina.perrin@example.com",
            login: {
              uuid: "7ca096d9-d30b-41cd-a176-c4dbd4fb33e8",
              username: "happypeacock357",
              password: "icu812",
              salt: "obRfW1Ng",
              md5: "75e40ede9d2ecdd9b743bbfca5395bf2",
              sha1: "06ba048fb41a8029d5ff3c492ee2ef81b86e7ac3",
              sha256: "d5a35d247b98ec8fde5d0dd15eecfea7ac49ab73f1dd176176bdafb58a99397f"
            },
            dob: {
              date: "1988-02-02T23:31:54Z",
              age: 31
            },
            registered: {
              date: "2013-10-14T09:41:39Z",
              age: 5
            },
            phone: "(622)-854-4572",
            cell: "(565)-614-6490",
            id: {
              name: "AVS",
              value: "756.7746.9086.94"
            },
            picture: {
              large: "https://randomuser.me/api/portraits/women/79.jpg",
              medium: "https://randomuser.me/api/portraits/med/women/79.jpg",
              thumbnail: "https://randomuser.me/api/portraits/thumb/women/79.jpg"
            },
            nat: "CH"
          }
        ]

  
      const req = httpMock.expectOne('https://randomuser.me/api/')
      expect(req.request.method).toBe('GET')
      req.flush(mockUser)
  })




});
