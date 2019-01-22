import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertsModule } from "../../../alerts/alerts.module";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthService } from "../../services/auth.service";

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent, LoginFormComponent ],
      imports: [AlertsModule, ReactiveFormsModule],
      providers: [AuthService, AngularFireAuth]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
