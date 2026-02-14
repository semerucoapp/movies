import { Component, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

// PrimeNG
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { MessageModule } from 'primeng/message';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink, FormsModule, InputTextModule, 
    PasswordModule, ButtonModule, DividerModule, MessageModule
  ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  // 1. Estado Atómico con Signals
  userData = signal({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  // 2. Estado de interacción (Touched)
  touchedFields = signal<Record<string, boolean>>({});

  // 3. Validaciones Computadas (Modernas y reactivas)
  errors = computed(() => {
    const data = this.userData();
    return {
      name: data.name.length < 3 ? 'Mínimo 3 caracteres' : null,
      email: !/^\S+@\S+\.\S+$/.test(data.email) ? 'Email inválido' : null,
      password: data.password.length < 6 ? 'Mínimo 6 caracteres' : null,
      mismatch: data.password !== data.confirmPassword ? 'Las contraseñas no coinciden' : null
    };
  });

  // 4. Estados de UI
  isSubmitting = signal(false);
  errorMessage = signal('');
  registrationSuccess = signal(false);

  // Validez total del formulario
  isFormValid = computed(() => {
    const e = this.errors();
    return !e.name && !e.email && !e.password && !e.mismatch;
  });

  updateField(field: string, value: string) {
    this.userData.update(prev => ({ ...prev, [field]: value }));
  }

  markTouched(field: string) {
    this.touchedFields.update(prev => ({ ...prev, [field]: true }));
  }

  async onSubmit(event: Event) {
    event.preventDefault();
    // Marcar todos como tocados al intentar enviar
    this.touchedFields.set({ name: true, email: true, password: true, confirmPassword: true });

    if (!this.isFormValid()) return;

    this.isSubmitting.set(true);
    try {
      console.log('Enviando:', this.userData());
      await new Promise(resolve => setTimeout(resolve, 2000));
      this.registrationSuccess.set(true);
    } catch (err) {
      this.errorMessage.set('Error al registrar usuario.');
    } finally {
      this.isSubmitting.set(false);
    }
  }
}